const axios = require("axios");

const clima = axios.create({
  baseURL: "https://api.hgbrasil.com/weather/?key=31539e50&user_ip=remote",
});

module.exports = clima;
