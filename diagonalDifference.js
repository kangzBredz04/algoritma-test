function diagonalDifference(matrix) {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  // Loop melalui matriks untuk menghitung kedua diagonal
  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonalSum += matrix[i][i]; // Diagonal utama (dari kiri atas ke kanan bawah)
    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i]; // Diagonal kedua (dari kanan atas ke kiri bawah)
  }

  // Mengembalikan hasil pengurangan diagonal utama dengan diagonal kedua
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = diagonalDifference(matrix);
console.log(result);
