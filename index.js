//libs usadas
const express = require("express");
const bodyParser = require("body-parser");
const date = require("date-fns");
//chamadas das apis
const estados = require("./api/estados");
const clima = require("./api/clima");
const DDD = require("./api/DDD");
const coleiras = require("./model/coleira");
const cep = require("./api/cep");

//express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server de api do João</h1>");
});

app.post("/api/estados", async (req, res) => {
  const UF = req.body.UF;
  try {
    const { data } = await estados.get(UF);

    res.status(200).send({ nome: data.nome });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/api/clima", async (req, res) => {
  try {
    const { data } = await clima.get();
    console.log(data);
    res.status(200).send({ clima: data.results.description });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/api/DDD", async (req, res) => {
  const telefone = req.body.telefone;
  codigo = telefone.substring(2, 4);
  console.log(codigo);
  try {
    const { data } = await DDD.get(codigo);
    res.status(200).send({ UF: data.state });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/api/saudacao", (req, res) => {
  let saudacao;
  const hour = new Date().getHours();

  console.log(hour);
  if (hour < 12) {
    saudacao = { saudacao: "bom dia" };
  } else if (hour < 17) {
    saudacao = { saudacao: "boa tarde" };
  } else {
    saudacao = { saudacao: "boa noite" };
  }
  res.status(200).json(saudacao);
});

app.get("/api/coleiras/All", (req, res) => {
  const num = JSON.stringify(coleiras.getAll());
  res.status(200).json({ coleiras: num });
});

app.delete("/api/coleiras/delete", (req, res) => {
  try {
    coleiras.delete();
    res.status(200).send("coleira comprada");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/api/cep", async (req, res) => {
  const cepNum = req.body.cep;
  const { data } = await cep.get(`${cepNum}/json/`);

  try {
    res.status(200).send({ cidade: data.localidade });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/api/date", (req, res) => {
  const userDate = req.body.user_date;
});
