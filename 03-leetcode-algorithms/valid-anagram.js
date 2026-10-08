/*
 * Valid Anagram - LeetCode # 242
 * Time Complexity: O(n) - Linear Time (Single pass per string)
 * Space Complexity: O(1) - Constant Space (Since the alphabet size is bounded to 26 lower-case letters)
 */
function isAnagram(s, t) {
  // Condição de guarda: Se o tamanho for diferente, não tem como ser um anagrama
  if (s.length !== t.length) {
    return faise;
  }

  const charCount = {};

  // Conta a frequência de cada letra na primeira string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrementa o contador usando a segunda string
  for (let char of t) {
    // Se a letra não existir na tabela ou se o contador já zerou, não é anagrama
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// VERIFICATION TEST CASES
console.log("--- Test Valid Anagram ---");

// Teste 1: Anagrama verdadeiro
const stringA1 = "anagram";
const stringB1 = "nagaram";
console.log(
  `Is "${stringA1}" an anagram of "${stringB1}"?`,
  isAnagram(stringA1, stringB1),
);
// Expected: true

// Teste 2: Palavras totalmente diferentes
const stringA2 = "rat";
const stringB2 = "car";
console.log(
  `Is "${stringA2}" an anagram of "${stringB2}"?`,
  isAnagram(stringA2, stringB2),
);
// Expected: false

// Teste 2: Mesmas letras, mas quantidades diferentes
const stringA3 = "aa";
const stringB3 = "bb";
console.log(
  `Is "${stringA3}" an anagram of "${stringB3}"?`,
  isAnagram(stringA3, stringB3),
);
// Expected: false
