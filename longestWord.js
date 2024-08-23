function longest(sentence) {
  // Pisahkan kalimat menjadi array kata-kata
  const words = sentence.split(" ");

  // Cari kata terpanjang
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  // Tampilkan kata terpanjang dan panjangnya
  return `${longestWord}: ${longestWord.length} character`;
}

const sentence =
  "Saya sangat senang jika bisa bergabung dengan perusahaan PT Eigen Trimathema";
console.log(longest(sentence));
