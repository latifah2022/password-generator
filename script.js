// Assignment Code
var passwordLength = ''
var  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(upperCase)
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
console.log(lowerCase)
var numeric = '0123456789';
console.log(numeric)
var specialCharacter = '@#$!&%';
console.log(specialCharacter)

function generatePassword () {
  var passwordLength = prompt("How many passwords would you like in your password? \n Pick a number between 8 and 128.");
  var upperCase = confirm("would you like upperCase? \nPress ok for yes. ress councel for no. Pick a letter.");
  var lowerCase = confirm("would you like lowerCase? \nPress ok for yes. Press councel for no. Pick a letter.");
  var numeric = confirm("would you like a numeric? \nPress ok for yes. Press councel for no. Pick a number.");
  var specialCharacter = confirm("would you like a specialCharacter? \nPress ok for yes. Press councel for no. Pick a character.");

  if (!passwordLength && !lowerCase && !upperCase && !numeric && !specialCharacter){
    alert("You need to choose atleast two types of characters to create a password.");
     return; generatePassword();
  }

  if (passwordLength<9 || passwordLength>128){
    alert("Your password must be 8 to 128 characters");
     return generatePassword();
  }

 if (lowerCase){
   for (var i =0; i < lowerCase.passwordLength; i++){
    passwordarry.push(lowerCase[i]);
  }

  if (upperCase){
    for (var i = 0; i < upperCase.passwordLength; i++){
      passwordarry.push(upperCase[i])
    }
  }

  if (numeric){
    for (var i = 0; i < numeric.passwordLength; i++){
      passwordarry.push(numeric[i]);
    }
  }

  if (specialCharacter){
    for (var i = 0; i < specialCharacter.passwordLength; i++){
      passwordarry.push(specialCharacter[i]);
    }
  }
  }

  var newerpassword = []

  function randompassword() { 
    var newpassword = passwordarry[Math.random()*passwordarry.passwordLength];

    if (newerpassword.length < passwordLength) {
      for(i=0; i < passwordLength; i++);
      randompassword(); 
    }
  } 
  return newerpassword.join("")
}

var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
