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
  // Ask for the length of password.
  var inputLength = window.prompt("Please input the length you want for your password. Enter a number between 8 and 128.");

  // Check if the answer is valid, between 8 and 128
  //  -> return the length if valid
  //  -> ask again if invalid
  if (Number.isInteger(Number(inputLength)) && inputLength >= 8 && inputLength <= 128) {
    return parseInt(Number(inputLength));
  } else {
    window.alert("The input value has to be an integer between 8 and 128.");
    return askLengthOfPassword();
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

  // Ask user if the type of characters should be include, for all four type.
  if (window.confirm("Do you want to include lowercase characters in your password?")) {
    includedType = includedType + "1";
  }
  if (window.confirm("Do you want to include uppercase characters in your password?")) {
    includedType = includedType + "2";
  }
  if (window.confirm("Do you want to include numeric characters in your password?")) {
    includedType = includedType + "3";
  }
  if (window.confirm("Do you want to include special characters in your password?")) {
    includedType = includedType + "4";
  }
  
  // Check if any type of characters are include.
  //  -> return the representing string if at least one type of characters included.
  //  -> ask again if none are included.
  if (includedType != "") {
    return includedType;
  } else {
    window.alert("You need to include at least 1 type of characters.");
    return askIncludedCharacter();
  }
}

// Return a string of a pseudo Password, which each number on each spot means what type of character should be there.
//  -> eg. a 8 characters length password including lower case letter, number and special character ("134")
//      the return string will be looking like "13411313"
var generatePseudoPassword = function(pseudoLength, includedType) {
  // Create an empty string for pseudo password
  // For the length of password (pseudoLength) the user entered, 
  // add one of the random characters from the includedType to pseudo password.

  return "12341234"; // default return before inserting codes.
}

// Return the update pseudo password string to make sure all desire type of characters are included.
//  -> eg. make sure a "12121212" for type "124" become "41221212"
var includingDesireType = function(pseudoString, includedType) {
  // Generate a randomly sorted string of includedType
  //  -> Change "124" into "241" or "412"
  // Change the first couple characters of pseudoString according to the sorted string of includedType
  //  -> Change "12411212" into "24111212" or "41211212"

  return "12344321"; // default return before inserting codes.
}

// Return the real password according to the pseudo password string
var changingPseudoToReal = function(pseudoString) {
  // Create empty password
  // Loop through the pseudo string, and add a random character of the indicated types into the password string.

  return "This is a dummy password"; // default return before inserting codes.
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