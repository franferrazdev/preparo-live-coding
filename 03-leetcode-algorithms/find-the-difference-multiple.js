/*
 * Find the Difference - Multiple Extra Characters Variation
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(1) - The map size is bounded by the alphabet size
 */
function findMultipleDifference(s, t) {
  const charCount = {};
  const extraLetters = [];

  // Registra a frequência de letras da string menor (s)
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Percorre a string maior (t) comparando com o mapa
  for (let char of t) {
    // Se a letra não existia no mapa ou o contador zerou, ela é uma letra extra
    if (!charCount[char]) {
      extraLetters.push(char);
    } else {
      charCount[char]--; // Consome a letra do estoque
    }
  }

  return extraLetters;
}

// VERIFICATION TEST CASES
console.log("--- Test Multiple Extra Letters ---");

// Cenário: Adicionado um 'z' e um 'y' no meio de abcd
const s1 = "abcd";
const t1 = "abzycd";
console.log("Extra letters found:", findMultipleDifference(s1, t1));
// Expected: ['z', 'y']
