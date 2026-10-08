/*
 * VARIATION A: Two SUm - Return Values Instead of Indexes
 * Time Complexoty: O(n) - Linear Time
 * Space Complexity: O(n) - Linear Space (Using ES6 Set)
 */
function twoSumValues(nums, target) {
  // O Set é excelente quando precisa registrar a esistência de um valor
  const seenNumbers = new Set();

  for (let num of nums) {
    const complement = target - num;

    // A busca no Set com .has() roda em tempo constante O(1)
    if (seenNumbers.has(complement)) {
      return [complement, num]; // Retorna os números reais que somam o target
    }

    seenNumbers.add(num);
  }

  return null; // Retorna null caso nenhum par seja encontrado
}

/*
 * VARIATION B: Two Sum - Find ALL Unique Pairs (No Duplicates)
 * Time Complexity: O(n log n) - Duw to initial Sorting
 * Space Complexity: O(1) - Beyond the output list memory
 */
function twoSumAllPairs(nums, target) {
  const result = [];

  // Primeiro, ordena o array de forma crescente para usar Dois Ponteiros
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      result.push([nums[left], nums[right]]);

      // Evitar Duplicados:
      // Move o ponteiro left e ignora números iguais seguidos
      while (left < right && nums[left] === nums[left + 1]) left++;
      // Move o ponteiro right e ignora números iguais seguidos
      while (left < right && nums[right] === nums[right - 1]) right--;

      // Move ambos após processar o par válido
      left++;
      right--;
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

// VERIFICATION TEST CASES
console.log("--- Test Variation A (Values only) ---");
console.log("Result:", twoSumValues([2, 7, 11, 15], 9)); // Expected: [2, 7]
console.log("Result:", twoSumValues([3, 2, 4], 10)); // Expected: null

console.log("\n--- Test Variation B (All Unique Pairs) ---");
const multipleNums = [2, 7, 11, 15, 2, 7, 4, 5, 5, 4];
console.log("All Pairs Found:", twoSumAllPairs(multipleNums, 9)); // Expected: [ [2, 7], [4, 5] ]
