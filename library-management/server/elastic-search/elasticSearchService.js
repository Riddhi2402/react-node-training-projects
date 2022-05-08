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
              analyzer: 'search_soundex',
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

const matchAllQuery = async (searchValue, indexName, fields) => {
  const searchBody = {
    query: {
      match_all: {},
    },
  };
  const result = client.search({
    index: indexName,
    body: searchBody,
  });
  return result;
};

const matchSearchTermsQuery = async (searchValue, indexName, field) => {
  const searchBody = {
    query: {
      match: {
        email: {
          query: searchValue,
        },
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
  matchAllQuery,
  matchSearchTermsQuery,
  client,
};
