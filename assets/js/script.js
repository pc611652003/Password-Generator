// Assignment code here

// Create list of characters we will use to generate password
const numberList = "0123456789";
const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialList = " !" + '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Return a random character from the characterList passed in
var randomCharacter = function(characterList) {
  return characterList[Math.floor(Math.random() * characterList.length)];
}

// Return the length of password
//  -> number including and between 8 and 128
var askLengthOfPassword = function() {
  // Ask for the length of password.

  // Check if the answer is valid, between 8 and 128
  //  -> return the length if valid
  //  -> ask again if invalid

  return 8; // default return before inserting codes.
}

// Return a string representing what type of characters should be included
//  -> if number is included, "1" is included in the return string
//  -> if lower case letter is included, "2" is included in the return string
//  -> if upper case letter is included, "3" is included in the return string
//  -> if special character is included, "4" is included in the return string
//    -> eg. "124" means password included number, lower case letter and special character are included.
var askIncludedCharacter = function() {
  // Ask user if the type of characters should be include, for all four type.

  // Check if any type of characters are include.
  //  -> return the representing string if at least one type of characters included.
  //  -> ask again if none are included.

  return "1234"; // default return before inserting codes.
}

// Return a string of a pseudo Password, which each number on each spot means what type of character should be there.
//  -> eg. a 8 characters length password including number, lower case letter and special character ("124")
//      the return string will be looking like "12411212"
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