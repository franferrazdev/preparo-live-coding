/*
 * Two Sum II - Input Array Is Sorted (LeetCode # 167)
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(1) -  Constant Space (Optimized)
 */
function twoSumSorted(nums, target) {
  // Inicializa um ponteiro no início e outro no fim do array
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [left, right]; // Par encontrado
    }

    /*
     * Se a soma for maior que o alvo, precisa de um número menos, como o array está ordenado, move o ponteiro da direita para a esquerda.
     */
    if (currentSum > target) {
      right--;
    } else {
    /*
     * Se a soma for menor que o alvo, precisa de um número maior, então move o ponteiro da esquerda para a direita.
     */
      left++;
    }
  }

  return []; // Retorna padrão caso nenhum par seja encontrado
}

// TEST CASES FOR VERIFICATION
// Obs.: Todos os arrays de entrada já estão ordenados de forma crescente
console.log("Test Case 1:", twoSumSorted([2, 7, 11, 15], 9)); // Expected Output: [0, 1]
console.log("Test Case 2:", twoSumSorted([2, 3, 4], 6)); // Expected Output: [0, 2]
console.log("Test Case 3:", twoSumSorted([-1, 0], -1)); // Expected Output: [0, 1]
