const Stack = require('./Stack');

// ***********************
// **   Initialization  **
// ***********************

const backPages = new Stack();
const frontPages = new Stack();
const currentPage = 'https://www.google.com/';

// *************************
// **   Helper Functions  **
// *************************

const showCurrentPage = (action) => {
    console.log(`\n${action}`);
    console.log(`Current page = $`)
}
