const axios = require("axios");

const cep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

module.exports = cep;
