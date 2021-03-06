// Varriables to be called upon in later functions
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var numbers = ["1", "2", "3", "4","5","6","7","8","9","0" ]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialChar = ["@","#","$","%","<","^","<","!",":",";","?","{","}","+",",","*"]

var numChars;
var nextChar;

// Function to pull password text and place in html, first step is running function(generatePassword)
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// blank array to hold concatenated array values based on users input preferences 
var combinedArray = [];

// Function to prompt user and generate random password
function generatePassword() {
  passwordText.value = "";
  var password = "";
  
  var numChars = parseInt(prompt("How many characters between 8 and 128 do you need?"));
  while (!numChars || numChars < 8  || numChars > 128) {
       alert("Must be a value between 8 and 128");
       numChars = parseInt(prompt("How many characters between 8 and 128 do you need?"))
  }
// confirming user preferences and concatenating values to blank array
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

// for loop to get random values from concatenated array and concatenate them for final password

for (var i = 0; i < numChars-1; i++) {
  nextChar = combinedArray[Math.floor(Math.random() * combinedArray.length)];
  password = password.concat(nextChar);
}  
return password
} 

// event listener to generate button, when clicked initiates function (writePassord)
generateBtn.addEventListener("click", writePassword)