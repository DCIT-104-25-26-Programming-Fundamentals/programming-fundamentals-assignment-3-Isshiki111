// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function transpose() {
    const m = readlineSync.questionInt("Enter number of rows: ");
    const n = readlineSync.questionInt("Enter number of columns: ");
    const matrix = [];
    for (let i = 0; i < m; i++) {
        const row = readlineSync.question("Enter row " + (i + 1) + ": ").split(' ').map(Number);
        matrix.push(row);
    }
    const trans = [];
    for (let i = 0; i < n; i++) {
        trans[i] = [];
        for (let j = 0; j < m; j++) {
            trans[i][j] = matrix[j][i];
        }
    }
    console.log("Original Matrix:");
    for (let i = 0; i < m; i++) {
        console.log(matrix[i].join('  '));
    }
    console.log("Transposed Matrix:");
    for (let i = 0; i < n; i++) {
        console.log(trans[i].join('  '));
    }
}

function addMatrices() {
    const m = readlineSync.questionInt("Enter number of rows: ");
    const n = readlineSync.questionInt("Enter number of columns: ");
    console.log("Enter first matrix:");
    const a = [];
    for (let i = 0; i < m; i++) {
        a.push(readlineSync.question("Enter row " + (i + 1) + ": ").split(' ').map(Number));
    }
    console.log("Enter second matrix:");
    const b = [];
    for (let i = 0; i < m; i++) {
        b.push(readlineSync.question("Enter row " + (i + 1) + ": ").split(' ').map(Number));
    }
    console.log("Sum Matrix:");
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        console.log(row.join('  '));
    }
}

function multiplyMatrices() {
    const m = readlineSync.questionInt("Enter rows of first matrix: ");
    const n = readlineSync.questionInt("Enter columns of first matrix: ");
    const p = readlineSync.questionInt("Enter columns of second matrix: ");
    console.log("Enter first matrix:");
    const a = [];
    for (let i = 0; i < m; i++) {
        a.push(readlineSync.question("Enter row " + (i + 1) + ": ").split(' ').map(Number));
    }
    console.log("Enter second matrix:");
    const b = [];
    for (let i = 0; i < n; i++) {
        b.push(readlineSync.question("Enter row " + (i + 1) + ": ").split(' ').map(Number));
    }
    const prod = [];
    for (let i = 0; i < m; i++) {
        prod[i] = [];
        for (let j = 0; j < p; j++) {
            prod[i][j] = 0;
            for (let k = 0; k < n; k++) {
                prod[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    console.log("Product Matrix:");
    for (let i = 0; i < m; i++) {
        console.log(prod[i].join('  '));
    }
}

function main() {
    console.log("Matrix Operations:");
    console.log("1. Transpose");
    console.log("2. Add Matrices");
    console.log("3. Multiply Matrices");
    const choice = readlineSync.questionInt("Enter choice: ");
    switch (choice) {
        case 1: transpose(); break;
        case 2: addMatrices(); break;
        case 3: multiplyMatrices(); break;
        default: console.log("Invalid choice.");
    }
}

main();

