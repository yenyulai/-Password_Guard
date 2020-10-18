// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







function generatePassword(){

  // Set four variables which contain four different types of password option

  var capitalLetters = "ABCDEFGHIJKLMNOPQRRSTUVWXYZ";
  var smallLetter = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCha = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  var passwordResult = "";
  var criteriaConfirmaion = alert ("Please select the following criteria for your password.");
  var charCount = parseInt(prompt ("How many character do you whish for ?"));

  var capitalCheck = confirm ("Do you want your password contains capital letters?");
  var smallLetCheck = confirm ("Do you want your password contains small cases?");
  var numbersCheck = confirm ("Do you want your password include numbers in it?");
  var specialChaCheck = confirm ("Do you want your password incldes special characters in it?");
  
  
  if (capitalCheck === true){
    var passwordResult = capitalLetters;
  }
  if (smallLetCheck === true) {
    var passwordResult = passwordResult + smallLetter;
  }
  if (numbersCheck === true) {
    var passwordResult = passwordResult + numbers;
  }
  if (specialChaCheck === true) {
    var passwordResult = passwordResult + specialCha;

  }else { alert ("You need to select at least one of the option.")

  }

  var finalResult = "";

  for (var i = 0; i < charCount; ++i) {
     finalResult += passwordResult.charAt(Math.floor(Math.random() * passwordResult.length));
  }

  return finalResult;

}