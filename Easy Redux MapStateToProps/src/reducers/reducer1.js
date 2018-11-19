function imprimir1(state = [], action = {}) {
  switch (action.type) {
    case "IMPRIMIR_1":
      state = action.nome;
  }
  return state;
}
export default imprimir1;
