const { Client } = require("@elastic/elasticsearch");

module.exports = new Client({ node: "http://127.0.0.1:9200" });
