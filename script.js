// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1", "2", "3", "4","5","6","7","8","9","0" ]
var capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialChar = ["@","#","$","%","<","^","<","!",":",";","?","{","}","+",",","*"]

var combinedArray = ["A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","@","#","$","%","<","^","<","!",":",";","?","+",",","*"]; 

function checkInput(){
  var amount = totalChars.value;
  if (isNaN(amount))
  {
    alert("Must be a number")
  }
}


// Write password to the #password input
function writePassword() {
  var totalChars = parseInt(prompt("How many characters between 8 and 128 do you need?"));
  checkInput() {
    if (parseInt(totalChars) < 8 || (parseInt(totalChars) > 128) {
   alert("Must be between 8 and 128");
}  else {
  yesNumber = confirm("Does your password need numbers?");
  yesCharacter = confirm("Does your password need Special Characters?");
  yesUppercase = confirm("Does your password need Uppercase letters?");
  yesLowercase = confirm("Does your password need Lowercase letters?");
};

if (yesNumber && yesCharacter && yesUppercase && yesLowercase) {
  

}

 



}

  
// else { 
//  var numChars = confirm("Do you want the password to include numbers?");
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");



//function generatePassword(){
 // } else {
   // return confirm("Do you want the password to include numbers?");
     
//if (hasSpecialChars) {
//    combinedArray.concat(specialChar);
//}

//if (hasUppercase) {
//   combinedArray.concat(upperCase);
//}

//var passLength = //use another Math.random that uses the min and the max for the interval

//for (var i = 0; i < numChars-1; i++) {
//   nextChar = mathFloor(Math.random(...nextChar.combinedArray));
//  password.concat(nextChar);
//}

//}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);