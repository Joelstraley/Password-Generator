// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1", "2", "3", "4","5","6","7","8","9","0" ]
var capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialChar = ["@","#","$","%","<","^","<","!",":",";","?","{","}","+",",","*"]


// Write password to the #password input
function writePassword() {
  var charAmount = prompt("How many characters between 8 and 128 do you need?");
    if (charAmount >= 8 && charAmount <= 128 ) { 
      return alert("Please Try Again!");
    } else {
      return confirm("Do you want the password to include numbers?");
    } var Num = prompt("Do you want capital letters?");
   // if (Num) {
      // return // 

    }

   


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
 