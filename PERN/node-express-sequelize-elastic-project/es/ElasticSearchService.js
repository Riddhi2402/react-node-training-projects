const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://127.0.0.1:9200' });

const compoundQuery = async (searchValue, indexName, fields) => {
  const searchBody = {
    query: {
      bool: {
        should: [
          {
            query_string: {
              query: '*' + searchValue + '*',
              fields: fields,
            },
          },
          {
            multi_match: {
              query: searchValue,
              fields: fields,
              analyzer: "search_soundex",
            },
          },
        ],
      },
    },
  };
  const result = client.search({
    index: indexName,
    body: searchBody,
  });
  return result;
};

module.exports = {
  compoundQuery,
};
