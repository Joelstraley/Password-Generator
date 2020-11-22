// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var numbers = ["1", "2", "3", "4","5","6","7","8","9","0" ]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialChar = ["@","#","$","%","<","^","<","!",":",";","?","{","}","+",",","*"]

var numChars;
var nextChar;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  passwordText.value = password;
 
}

var combinedArray = [];

function generatePassword() {
  passwordText.value = "";
  var password = "";
  
  var numChars = parseInt(prompt("How many characters between 8 and 128 do you need?"));
  while (!numChars && numChars < 8  || numChars > 128) {
       alert("Must be a value between 8 and 128");
       numChars = parseInt(prompt("How many characters between 8 and 128 do you need?"))
  }

if (confirm("Does your password need Lowercase letters?")) {
   combinedArray = combinedArray.concat(lowerCase);
} 
if (confirm("Does your password need Uppercase letters?")) {
  combinedArray = combinedArray.concat(upperCase);
} 
if (confirm("Does your password need numbers?")) {
  combinedArray = combinedArray.concat(numbers);
} 
if (confirm("Does your password need Special Characters?")) {
  combinedArray = combinedArray.concat(specialChar);  
}

if (!combinedArray) {
   alert("You need to confirm a value type")
}

for (var i = 0; i < numChars-1; i++) {
  nextChar = combinedArray[Math.floor(Math.random() * combinedArray.length)];
  password = password.concat(nextChar);
}  
return password
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)