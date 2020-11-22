// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1", "2", "3", "4","5","6","7","8","9","0" ]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialChar = ["@","#","$","%","<","^","<","!",":",";","?","{","}","+",",","*"]

var numChars;
var password = "";
var nextChar;

var combinedArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}


function generatePassword() {
  var numChars = parseInt(prompt("How many characters between 8 and 128 do you need?"));
    if (!numChars) {
      alert("Must be a number")
    } else if (numChars < 8 || numChars > 128) {
      alert("Must be between 8 and 128");
}  else {
  var yesLowercase = confirm("Does your password need Lowercase letters?");
  var yesUppercase = confirm("Does your password need Uppercase letters?");
  var yesNumbers = confirm("Does your password need numbers?");
  var yesSpecialChar = confirm("Does your password need Special Characters?");
};

if (yesLowercase) {
  combinedArray.concat(lowerCase);
} if (yesUppercase) {
  combinedArray.concat(upperCase);
} if (yesNumbers) {
  combinedArray.concat(numbers);
} if (yesSpecialChar) {
  combinedArray.concat(specialChar);    
} else {
  alert("You confirmed no value types");
};

for (var i = 0; i < numChars-1; i++) {
  nextChar = combinedArray[Math.floor(Math.random() * combinedArray.length)];
  password.concat(nextChar);
} 
} 
//var passLength = ///use another Math.random that uses the min and max for the interval

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)