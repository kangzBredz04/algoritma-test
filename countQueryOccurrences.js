function countQueryOccurrences(input, query) {
  // Buat array untuk menyimpan hasil
  let result = [];

  // Loop melalui setiap kata di query
  for (let q of query) {
    // Hitung berapa kali kata dari query muncul di input
    let count = input.filter((word) => word === q).length;
    result.push(count); // Tambahkan hasil ke array result
  }

  return result;
}

const INPUT = ["xc", "dz", "eigen", "bbb", "dz", "eigen", "bbb", "eigen"];
const QUERY = ["bbb", "ac", "dz", "eigen"];

const output = countQueryOccurrences(INPUT, QUERY);
console.log(output);
