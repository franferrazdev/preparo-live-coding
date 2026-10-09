/*
 * Find the Difference and its Index - Shuffled Variation
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(1) - Constant Space
 */
function findDifferenceAndIndex(s, t) {
  let sumS = 0;
  let sumT = 0;

  // Encontra a letra extra usando a soma ASCII
  for (let i = 0; i < s.length; i++) {
    sumS += s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    sumT += t.charCodeAt(i);
  }

  const extraChar = String.fromCharCode(sumT - sumS);

  // Encontra o índice da letra extra dentro da string t
  const targetIndex = t.indexOf(extraChar);

  // Retorna um objeto contendo tanto o caractere quanto a posição dele
  return {
    character: extraChar,
    index: targetIndex,
  };
}

// VERIFICATION TEST CASES
console.log("--- Test Extra Letter with Index ---");

// Cenário: "abcd" embaralhado em t como "cbade". Letra extra "e" no índice 4
const s1 = "acbd";
const t1 = "cbade";
console.log("Result:", findDifferenceAndIndex(s1, t1));
// Expected: {character: 'e', index: 4}
