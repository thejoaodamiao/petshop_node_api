module.exports = {
  coleiras: [
    {
      cor: "vermelha",
    },
    {
      cor: "azul",
    },
    {
      cor: "verde",
    },
  ],
  getAll() {
    return this.coleiras.length;
  },

  delete() {
    this.coleiras.pop();
    return true;
  },
};
