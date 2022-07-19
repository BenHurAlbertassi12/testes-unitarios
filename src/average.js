/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayio) => {
  // variaveis
  let somaArrey = 0;
  let divArrey = 0;
  let resultado = 0;

  // comando if para quando o tamanho do array for igual a 0
  if (arrayio.length === 0) {
    return undefined;
  } // for para percorrer a array
  for (let index = 0; index < arrayio.length; index += 1) {
    if (typeof arrayio[index] !== 'number') { // if para enviar mensagem de undefined quando algo digitado não fo number
      return undefined; // retorno pelo if
    }
    somaArrey += arrayio[index]; // soma vinda do for ali de cima, que percorreu toda array
    divArrey = arrayio.length; // array .length de novo para chegar ao numero que sera o divisor
    resultado = Math.round(somaArrey / divArrey); // resultado arredondado com Math.round 
  }
  return resultado;
};
module.exports = average;
