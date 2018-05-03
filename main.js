// Here the jQuery code begins
$(document).ready(() => {

  let $button = $('.button');
  let $button2 = $('.button2');
  let $userInput = document.getElementById('userInputField');
  let $userOutput = document.getElementById('userOutput');
  var userInputValue = $userInput.value;
  var userStorage = localStorage.getItem('userStorage');

  $button.on('click', () => {
    doEverything($userInput.value);
  });

  $button2.on('click', () => {
    var c = randomizer(userStorage);
    $(userOutput).text(c);
  });
}); // Here the jQuery code ends

// Here the JavaScript code begins

var myStorage = []; // temporary storage helping localStorage to ADD user input, not overwrite it

function doEverything(aString) { // Here the randomizing function begins

  if (!localStorage.getItem('userStorage')) { // check if localStorage is NOT empty, i.e. if page was NOT visited before
    myStorage.push(aString);
    localStorage.setItem('userStorage', aString); // if NOT visited before, add the user input to localStorage
  } else { //
    if (localStorage.getItem('userStorage') === aString) { // checks IF the user input is the same as what's in the localStorage
      // IF it's the same, do nothing (or...???)
    } else {
      myStorage.push(aString);
      var JSONstr = JSON.stringify(myStorage); // if not the same, add it
      localStorage.setItem('userStorage', JSONstr);
    };
  };
}; // Here the randomizing function ends

function randomizer(bString) {
  var dString = bString.split(",");
  var sortedArray = [...new Set(dString)];
  var cString = JSON.parse(sortedArray);
  var sortedArray2 = [...new Set(cString)];
  var finalResult = [];

  for (let i = 0; i < 3; i++) { // three words are randomly chosen from the array of strings and returned in a new array
    var hey = sortedArray2.splice(Math.floor(Math.random() * sortedArray2.length), 1)[0];
    finalResult.push(" " + hey);

  }; // [0] is used so finalResult receives only strings and not whole arrays with only one string in each array.
  return ("Hey, sunshine! You are " + finalResult[0] + ", " + finalResult[1] + " and " + finalResult[2] + ". Never forget that!");
};
// Here the JavaScript code ends
