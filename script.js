
/* Global variables */
var who = "wooden shoe"
var joke = "wooden show like to know?";
var expected = who + " who?";

function sayHello(){
	alert("Hello, world!");
}	

/* Simple version */
function knock(){
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */
function knockCheck(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  expected = who + " who?";
  if (answer == expected) alert(joke);
  else alert("Huh?");
}

/* Best */
function knockAgain(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  var expected = who + " who?";
  if (answer == expected) alert(joke);
  // this next line is "recursion". 
  else askAgain();
}

function askAgain() {
  alert("Huh?");
  var answer = prompt(who);
  // what is the difference between = and ==?
  if (answer == expected) alert(joke);
  else askAgain();
}