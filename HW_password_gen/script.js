

//variables
let character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let lalpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let ualpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];//


//concatenates password variables

let index = Math.floor(Math.random() *
character.length);

let passwordCharacters = character.concat(numbers, lalpha, ualpha)

//When you press button myFunction starts and asks question that includes if/else statement

//Character Length
f
unction myFunction() {
    var str = "Choose a number length between 8 and 128";
    document.getElementById("generate").innerHTML = "str";
  }
  
if (numbers < 8,|| > 128){ 
    validate = ("Great! Let's move on.");
    _}
    else {
        message = ("length must be between 8 and 128")
    }
    parseInt(string, 8-128)


    function confirm() {
        var txt;
        if (confirm("Press a button!")) {
          txt = "You pressed OK!";
        } else {
          txt = "You pressed Cancel!";
        }
        document.getElementById("demo").innerHTML = txt;
      }
    let message=["Should password include numbers?", "Should password include upper case letters?",
    "Should password contain lower case letters?", "Should password contain special characters?"]
    
for (let i=0; i<4, i++) {
  console.log(message [i]);
}


    confirmCharacter = confirm("Should password include numbers?");
confirmUppercase = confirm("Should password include upper case letters?");
confirmLowercase = confirm("Should password contain lower case letters?");
confirmSpecial = confirm("Should password contain special characters?");


//EventListener - activates button click
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// Assignment Code
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
function generatePassword() {
  var num = Math.random();
  return num;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);