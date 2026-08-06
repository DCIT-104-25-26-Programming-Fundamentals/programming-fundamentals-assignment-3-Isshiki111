// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function add(a, b) {
    console.log("Result: " + a + " + " + b + " = " + (a + b).toFixed(2));
}

function subtract(a, b) {
    console.log("Result: " + a + " - " + b + " = " + (a - b).toFixed(2));
}

function multiply(a, b) {
    console.log("Result: " + a + " * " + b + " = " + (a * b).toFixed(2));
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return;
    }
    console.log("Result: " + a + " / " + b + " = " + (a / b).toFixed(2));
}

function modulus(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return;
    }
    console.log("Result: " + a + " % " + b + " = " + (a % b));
}

function exponentiation(a, b) {
    console.log("Result: " + a + " ^ " + b + " = " + (a ** b).toFixed(2));
}

function main() {
    let choice;
    do {
        console.log("\n============================");
        console.log("     SIMPLE CALCULATOR");
        console.log("============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");
        choice = readlineSync.questionInt("Select an operation (1-7): ");
        if (choice >= 1 && choice <= 6) {
            const a = readlineSync.questionFloat("Enter first number: ");
            const b = readlineSync.questionFloat("Enter second number: ");
            switch (choice) {
                case 1: add(a, b); break;
                case 2: subtract(a, b); break;
                case 3: multiply(a, b); break;
                case 4: divide(a, b); break;
                case 5: modulus(a, b); break;
                case 6: exponentiation(a, b); break;
            }
        } else if (choice === 7) {
            console.log("Goodbye!");
        } else {
            console.log("Invalid choice. Please enter 1-7.");
        }
    } while (choice !== 7);
}

main();