/*
 * Valid Anagram - Flexible Sentence Variation
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(1) - Constant Space
 */
function isAnagramFlexible(s, t) {
  // Função utilitária para limpar as strings (Remove espaços e converte para minúsculo)
  const cleanString = (str) => str.replace(/\s+/g, "").toLowerCase();

  const sClean = cleanString(s);
  const tClean = cleanString(t);

  // Condição de guarda após a limpeza das strings
  if (sClean.length !== tClean.length) {
    return false;
  }

  const charCount = {};

  // Conta a frequência na primeira string limpa
  for (let char of sClean) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrementa usando a segunda string limpa
  for (let char of tClean) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// VERIFICATION TEST CASES
console.log("--- Test Flexible Anagram ---");

// Teste 1: Sentenças complexas (Frase clássica do filme Harry Potter)
const phrase1 = "Tom Marvolo Riddle";
const phrase2 = "I am Lord Voldemort";
console.log(
  "Is Harry Potter anagram valid?",
  isAnagramFlexible(phrase1, phrase2),
);
// Expected: true

// Teste 2: Diferença apenas em maiúsculas/minúsculas e espaços
const word1 = "Listen";
const word2 = "Silent";
console.log("Is Listen/Silent valid?", isAnagramFlexible(word1, word2));
// Expected: true
