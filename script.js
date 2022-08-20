// Assignment Code
var passwordLength = ''
var  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(upperCase)
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
console.log(lowerCases)
var numeric = '0123456789';
console.log(numeric)
var specialCharacter = '@#$!&%';
console.log(specialCharacter)

function generatePassword () {
  var passwordLength = confirm("How many passwords would you like in your password? \n pick a number between 9 and 15.");
  var upperCase = confirm("would you like upperCase? \npress ok for yes. press councel for no. Pick a letter");
  var lowerCase = confirm("would you like lowerCase? \npress ok for yes. press councel for no.");
  var numeric = confirm("would you like a numeric? \npress ok for yes. press councel for no.");
  var specialCharacter = confirm("would you like a specialCharacter? \npress ok for yes. press councel for no.");

if (!passwordLength && !lowerCase && !upperCase && !numeric && !specialCharacter){
  alert("You need to choose atleast three types of characters to create a password.");
   return; generatePassword();
}

if (passwordLength<9 || passwordLength>15){
  alert("Your password must be 8 to 128 characters");
   return generatePassword();
}

 if (lowerCase){
   for (var i =0; i < lowerCase.passwordLength;){
    passwordarry.push(lowerCase[i]);
  }

  if (upperCase){
    for (var i =)
  }
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
