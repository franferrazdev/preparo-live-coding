/*
 * Find the Difference - LeetCode # 389
 * Time Complexity: O(n) - Linear Time
 * Space Complexity: O(1) - Constant Space
 */
function findTheDifference(s, t) {
  let sumS = 0;
  let sumT = 0;

  // Soma os valores numéricos (ASCII) de todas as letras da string
  for (let i = 0; i < s.length; i++) {
    sumS += s.charCodeAt(i);
  }

  //  Soma os valores numéricos (ASCII) de todas as letras da string T
  for (let i = 0; i < t.length; i++) {
    sumT += t.charCodeAt(i);
  }

  // A diferença entre as duas somas será o código ASCII da letra extra
  const extraCharCode = sumT - sumS;

  // Converte o código numérico de volta para o caractere de texto
  return String.fromCharCode(extraCharCode);
}

// VERIFICATION TEST CASES
console.log("--- Test Find the Difference ---");

// Teste 1: Letra extra "e" no final
const s1 = "abcd";
const t1 = "abcde";
console.log(
  `The extra letter between "s{s1}" and "${t1}" is:`,
  findTheDifference(s1, t1),
);
// Expected: "e"

// Teste 2: String vazias/uma letra
const s2 = "";
const t2 = "y";
console.log(
  `The extra letter between "${s2}" and "${t2}" is:`,
  findTheDifference(s2, t2),
);
// Expected: "y"

// Teste 3: Letra extra "a" misturada no meio do caminho
const s3 = "ae";
const t3 = "aea";
console.log(
  `The extra letter between "{s3}" and "${t3}" is:`,
  findTheDifference(s3, t3),
);
// Expected: "a"
