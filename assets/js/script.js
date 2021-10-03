// Assignment code here

// Create list of characters we will use to generate password
const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "0123456789";
const specialList = " !" + '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Return a random character from the characterList passed in
var randomCharacter = function(characterList) {
  return characterList[Math.floor(Math.random() * characterList.length)];
}

// Return the length of password
//  -> number including and between 8 and 128
var askLengthOfPassword = function() {
  var inputLength = "";
  var answerValid = false;
  
  // Ask again if the answer is not valid
  while (!answerValid) {
    // Ask for the length of password.
    inputLength = window.prompt("Please input the length you want for your password. Enter a number between 8 and 128.");
    
    // Check if the answer is valid, between 8 and 128
    //  -> if valid, ask user to confirm the length
    //    -> if confirmed, return the length
    //    -> else, set the answer as invalid to continue the loop
    //  -> ask again if invalid
    answerValid = (Number.isInteger(Number(inputLength)) && inputLength >= 8 && inputLength <= 128);
    if (answerValid) {
      if (window.confirm("You want your password to be " + inputLength + "-characters long.")) {
        window.alert("You will process to choose which types of characters to be included in your password.");
        return parseInt(Number(inputLength));
      } else {
        window.alert("You can enter the length of your password again.");
        answerValid = false;
      }
    } else {
      window.alert("The input value has to be an integer between 8 and 128.");
    }
  }
 
}

// Return a string representing what type of characters should be included
//  -> if lower case letter is included, "1" is included in the return string
//  -> if upper case letter is included, "2" is included in the return string
//  -> if number is included, "3" is included in the return string
//  -> if special character is included, "4" is included in the return string
//    -> eg. "134" means password included lower case letter, number and special character are included.
var askIncludedCharacter = function() {
  var includedType = "";

  // Repeat to ask if none of the 4 types are included.
  while (includedType === "") {
    // Ask user if the type of characters should be include, for all four type.
    if (window.confirm("Do you want to include lowercase characters in your password?")) {
      includedType += "1";  
    }
    if (window.confirm("Do you want to include uppercase characters in your password?")) {
      includedType += "2";
    }
    if (window.confirm("Do you want to include numeric characters in your password?")) {
      includedType += "3";
    }
    if (window.confirm("Do you want to include special characters in your password?")) {
      includedType += "4";
    }
    
    // Check if any type of characters are include.
    //  -> if none is included, display alert message
    //  -> else ask user to confirm the choices
    //    -> if confirm, alert user the password is generating, return includedType
    //    -> if not, ask what types to include again.
    if (includedType == "") {
      window.alert("You need to include at least 1 type of characters.");
    } else {
      // Generating the message for confirmation.
      var confirmMessage = "You decide to include ";
      for (var i = 0; i < includedType.length; i++) {
        if (i != 0) {
          if (i == (includedType.length - 1)) {
            confirmMessage += " and ";
          } else {
            confirmMessage += ", "
          }
        }
        switch (includedType[i]) {
          case "1":
            confirmMessage += "lowercase";
            break;
          case "2":
            confirmMessage += "uppercase";
            break;
          case "3":
            confirmMessage += "numeric";
            break;
          case "4":
            confirmMessage += "special";
            break;
          default:
            break;
        }
      }
      confirmMessage += " characters in your password.";

      // Ask user to confirm the choices
      if (window.confirm(confirmMessage)) {
        window.alert("Your password is now being generated.");
        return includedType;
      } else {
        window.alert("You will re-decide which types of characters to include.");
        // Clear out includedType, so while loop will continue.
        includedType = "";
      }
    }
  }
  
}

// Return a string of a pseudo Password, which each number on each spot means what type of character should be there.
//  -> eg. a 8 characters length password including lower case letter, number and special character ("134")
//      the return string will be looking like "13411313"
var generatePseudoPassword = function(pseudoLength, includedType) {
  // Create an empty string for pseudo password
  var pseudoPasswordString = "";

  // For the length of password (pseudoLength) the user entered, 
  // add one of the random characters from the includedType to pseudo password.
  for (var i = 0; i < pseudoLength; i++) {
    pseudoPasswordString += includedType[Math.floor(Math.random() * includedType.length)];
  }

  return pseudoPasswordString;
}

// Return the update pseudo password string to make sure all desire type of characters are included.
//  -> eg. make sure a "12121212" for type "124" become "41221212"
var includingDesireType = function(pseudoString, includedType) {
  // Divide the pseudo password string into parts according to the number of types of characters included.
  //  -> For includeType "134", divide the pseudo password string into 3 parts + Remaining
  //  -> "13431414" will become "13" + "43" + "14" + "14"(Remaining) 
  var partLength = Math.floor(pseudoString.length / includedType.length);
  
  // For each desire type of characters, generate a random index.
  var randomIndex = "";
  for (var i = 0; i < includedType.length; i++) {
    randomIndex += ((partLength * i) + (Math.floor(Math.random() * partLength)));
  }
  
  // Generate a updated pseudo string which guarantee to include all desired types of character
  //  -> if the index is equal to a number in randomIndex, put in the corresponding type of character
  //  -> else copy the corresponding character from pseudo string.
  var updatedPseudo = "";
  var currentIndex = 0;
  for (var j = 0; j < pseudoString.length; j++) {
    if (randomIndex[currentIndex] == j) {
      updatedPseudo += includedType[currentIndex];
      currentIndex++;
    } else {
      updatedPseudo += pseudoString[j];
    }
  }

  return updatedPseudo;
}

// Return the real password according to the pseudo password string
var changingPseudoToReal = function(pseudoString) {
  // Create empty password
  var realPassword = "";

  // Loop through the pseudo string, and add a random character of the indicated types into the password string.
  for (var i = 0; i < pseudoString.length; i++) {
    switch (pseudoString[i]) {
      case "1": 
        realPassword += randomCharacter(lowerCaseList);
        break;
      case "2":
        realPassword += randomCharacter(upperCaseList);
        break;
      case "3":
        realPassword += randomCharacter(numberList);
        break;
      case "4":
        realPassword += randomCharacter(specialList);
        break;
      default:
        break;
    }
  }

  return realPassword;
}

var generatePassword = function() {
  // Ask for the length of the password.
  var passwordLength = askLengthOfPassword();

  // Ask for yes/no to include each type of character.
  var includedCharacters = askIncludedCharacter();

  // Generate a string of number indicate what type of character is at each specific spot of password.
  var pseudoPassword = generatePseudoPassword(passwordLength, includedCharacters);
  
  // Making sure each desired type of characters are included in the string.
  var updatedPseudoPassword = includingDesireType(pseudoPassword, includedCharacters);

  // Transform the string into real password.
  var password = changingPseudoToReal(updatedPseudoPassword);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);