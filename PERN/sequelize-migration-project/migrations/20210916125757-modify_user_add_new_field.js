'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(
          `
            ALTER TABLE user ADD COLUMN tsv tsvector;
            `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
            CREATE INDEX tsv_idx ON user USING gin(tsv);
            `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
            UPDATE user SET tsv = setweight(to_tsvector(coalesce(name,'')), 'A') || setweight(to_tsvector(coalesce(email,'')), 'D'); 
            `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
            CREATE FUNCTION user_search_trigger() RETURNS trigger AS $$
            begin
              new.tsv :=
                setweight(to_tsvector(coalesce(new.name,'')), 'A') ||
                setweight(to_tsvector(coalesce(new.email,'')), 'D');
              return new;
            end
            $$ LANGUAGE plpgsql;
            `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
            CREATE TRIGGER ts_vector_update BEFORE INSERT OR UPDATE
            ON user FOR EACH ROW EXECUTE PROCEDURE user_search_trigger(); 
            `,
          { transaction: t }
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.sequelize.query(
          `
          DROP TRIGGER ts_vector_update ON user;
        `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
                DROP INDEX tsv_idx;
              `,
          { transaction: t }
        ),
        queryInterface.sequelize.query(
          `
                ALTER TABLE user DROP COLUMN tsv;
              `,
          { transaction: t }
        ),
      ]);
    });
  },
};



