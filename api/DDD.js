const axios = require("axios");

const DDD = axios.create({
  baseURL: "https://brasilapi.com.br/api/ddd/v1/",
});

module.exports = DDD;
