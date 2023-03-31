const Stack = require('./Stack');
const prompt = require('prompt-sync')();


// ***********************
// **   Initialization  **
// ***********************

const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'https://www.google.com/';

// *************************
// **   Helper Functions  **
// *************************

// showCurrentPage shows:
// - the action taken, based on user input
// - the current page,
// - the top element of the `backPages` stack, and
// - the top element of the `nextPages` stack.
const showCurrentPage = (action) => {
    console.log(`\n${action}`);
    console.log(`Current page = ${currentPage}`);
    console.log('Back page = ', backPages.peek());
    console.log('Next page = ', nextPages.peek());
    } 
  
    // We want to implement what happens when we visit a new page. The new page replaces the current page, hence, the current page has to be moved to the backPages stack as history. The first time we open a new page, the nextPages stack is empty. However, this is not always so when we have navigated back and forth. The expected behavior of a web browser is to always clear the nextPages stack when a new page is visited.
  const newPage = (page) => {
    backPages.push(currentPage);
    currentPage = page;
  
    // clear the nextPages stack
    while(!nextPages.isEmpty()){
      nextPages.pop();
    }
  
    showCurrentPage('NEW: ');
  } 
  
    // backPage() is called when we navigate backward a page. 
    // currentPage will get pushed(saved) to nextPages stack, the previous page(the user wants to visit) gets taken from top of the backPages stack and will be served to user
  const backPage = () => {
    nextPages.push(currentPage);
    currentPage = backPages.pop(); 
    showCurrentPage('BACK: ');
  }
  
  // nextPage() is called when we navigate forward a page.
  // current page is being added to backPages stack and we are retrieving the top node(page) from nextPage stack as that is the immediate page the user wants to visit. This page is served to user, stored as currentPage and removed from nextPages stack
  const nextPage = () => {
    backPages.push(currentPage);  
    currentPage = nextPages.pop(); 
    showCurrentPage('NEXT: ');
  } 
// **************************************************
// **   The following are used to prompt the user  **
// **************************************************

const baseInfo = '\nEnter an url';
const backInfo = '\nB|b for back page';
const nextInfo = '\nN|n for next page';
const quitInfo = '\nQ|q for quit';
const question = 'Where would you like to go today? ';

// ********************************
// **   User Interface - Part 1  **
// ********************************


// A global variable, finish, that controls the termination of a while loop that takes in user input.
let finish = false;

// We want to control when the back navigation and front navigation operations are enabled. 
let showBack = false;
let showNext = false;

showCurrentPage('DEFAULT: ');

while(!finish){
  let instructions = baseInfo;

  if(!backPages.isEmpty()){
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  }
  else{
    showBack = false;
  }

  if(!nextPages.isEmpty()){
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  }
  else{
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}`;

  console.log(instructions);


// ********************************
// **   User Interface - Part 2  **
// ********************************

  // The next section of the user interface focuses on prompting the user for input and processing user input while inside the while loop. The code to prompt for user input is as follows:  const response = prompt('How are you today?');

  const answer = prompt(question);

  const lowerCaseAnswer = answer.toLowerCase();

  if(lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q'){
    // we create a new page based on the url    newPage(answer);  
    newPage(answer);
  }
  else if(lowerCaseAnswer === 'b'){
    if(showBack === false){
      console.log('There are no previously visited pages.')
    }
    else if(showBack === true){
    // we navigate back a page    backPage();  
    backPage();
    }
  }
  else if(lowerCaseAnswer === 'n'){
    if(showNext === false){
      console.log('Cannot go to the next page. Stack is empty.')
    }
    else if(showNext === true){
      // we navigate forward a page    nextPage(); 
      nextPage();
    }
  }
  else if(lowerCaseAnswer === 'q'){
    finish = true;
  }

}


