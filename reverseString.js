function reverseStringWithNumber(input) {
  // Pisahkan angka dan huruf dari input
  const letters = input.slice(0, -1); // Ambil semua karakter kecuali yang terakhir
  const number = input.slice(-1); // Ambil karakter terakhir (angka)

  // Balik urutan huruf
  const reversedLetters = letters.split("").reverse().join("");

  // Gabungkan huruf yang sudah dibalik dengan angka
  return reversedLetters + number;
}

const input = "WAHYU1";
const result = reverseStringWithNumber(input);
console.log(`Dari kata '${input}' menjadi '${result}'`);
