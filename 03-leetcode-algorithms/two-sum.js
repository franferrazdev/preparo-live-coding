/*
 * Two Sum - LeetCode #1
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(n) - Linear Space
 */

function twoSum(nums, target) {
  /*
   * Cria um objeto para funcionar como uma Tabela Hash (Dicionário), ele vai guardar o número como CHAVE e o índice como VALOR -> {numero: indice} */
  const numMap = {};

  // Percorre o array uma única vez
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    /*
     * Se o complemento necessário já esiste no mapa, o par foi achado!
     * Usa !== undefined porque o índice pode ser 0 (e 0 é considerado "falsy" em JS) */
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }

    //    Se não encontra o complemento, salva o número atual e seu índice no mapa
    numMap[currentNum] = i;
  }

  return []; // Retorno padrão caso nenhum par seja encontrado
}

// TEST CASES FOR VERIFICATION
console.log("Teste case 1:", twoSum([2, 7, 11, 15], 9)); // Expected Output: [0, 1] (Because 2 + 7 = 9)
console.log("Teste case 2:", twoSum([3, 2, 4], 6)); // Expected Output: [1, 2] (Because 2 + 4 = 6)
console.log("Teste case 3:", twoSum([3, 3], 6)); // Expected Output: [0, 1] (Because 3 + 3 = 6)
