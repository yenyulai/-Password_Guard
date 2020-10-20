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

// Write the function generatePassword
function generatePassword() {
  
  // Set four variables for four different types of password options
  var capitalLetters = "ABCDEFGHIJKLMNOPQRRSTUVWXYZ";
  var smallLetter = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCha = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Create a empty string to get the final result of password
  var passwordResult = "";
  var finalResult = "";

  alert("Please select the following criteria for your password.");

  // Ask people to enter their preferable lngth of password

  var inputLength = parseInt(prompt("How many character do you whish for ?"));
  while (inputLength < 8 || inputLength > 128) {
    alert("You can only choose numbers between 8 and 128");
    inputLength = parseInt(prompt("How many character do you whish for ?"));
  }

  // Series of password choice
  var capitalCheck = confirm(
    "Do you want your password contains capital letters?"
  );
  var smallLetCheck = confirm(
    "Do you want your password contains small cases?"
  );
  var numbersCheck = confirm(
    "Do you want your password include numbers in it?"
  );
  var specialChaCheck = confirm(
    "Do you want your password incldes special characters in it?"
  );

  // Set condition
  // if none of the four condition are true, then pop out the alert
  if (!capitalCheck && !smallLetCheck && !numbersCheck && !specialChaCheck) {
    alert("You need to select at least one of the option.");
  } else {
    if (capitalCheck === true) {
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
    }
    // set a for loop to randomly generate password according to the above conditions and user's prferable length
    for (var i = 0; i < inputLength; ++i) {
      finalResult += passwordResult.charAt(
        Math.floor(Math.random() * passwordResult.length)
      );
    }
  }

  return finalResult;
}
