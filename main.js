// Assessment: DOM Methods Practice


// Challenge:

// 1. Your first task is to use DOM methods to re-create 
//  the DOM tree below using only JavaScript.

const bodyElement = document.querySelector ('body');

let mainElement = document.createElement ('main');
bodyElement.append (mainElement);

let imgElement = document.createElement ('img');
imgElement.className = 'images';
imgElement.src = './yesss.gif';

let aElement = document.createElement ('a');
aElement.className = 'links';
aElement.href = 'https://www.kenzie.academy/';
aElement.append ('Kenzie Academy');

mainElement.append (imgElement);
mainElement.append (aElement);

// 2. Now, add a "click" event listener to the button element 
//  you created. On click, remove the <main> element node from 
//  the page. After clicking this button, the user should only 
//  see the button on the page and the DOM tree should look like this:

let buttonElement = document.createElement ('button');
buttonElement.append ('Remove Main Element');
bodyElement.append (buttonElement);

buttonElement.addEventListener ("click", function() {
    mainElement.remove ();
})

// Stretch Goals:

// 1. Stretch Goal: Add a text input and a button which, on click, can 
//  REMOVE an element based on a CSS selector provided by the user in the textbox.

let buttonTwoElement = document.createElement ('button');
buttonTwoElement.append ('Remove Text');
bodyElement.append (buttonTwoElement);

buttonTwoElement.addEventListener ("click", function() {
    
})

//  2. Stretch Goal: Add a text input and a button which, on click, can CREATE 
//  an element and append it to the page. This element should contain text 
//  content provided by the user in the textbox.

let buttonThreeElement = document.createElement ('button');
buttonThreeElement.append ('Create Button');
bodyElement.append (buttonThreeElement);

buttonThreeElement.addEventListener ("click", function() {
    
})