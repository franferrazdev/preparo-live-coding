function isPalindrome(str) {
  // Limpa a string para aceitar frases
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // Letras diferentes, não é palíndromo(uma sequência de caracteres que fica igual mesmo de trás para frente)
    }
    left++;
    right--;
  }
  return true;
}

// VERIFICATION TEST CASES
console.log("Is 'radar' palindrome?", isPalindrome("radar")); // Expected: true
console.log("Is 'hello' palindrome?", isPalindrome("hello")); // Expected: false
