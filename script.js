var passwordLength
var  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(upperCase)
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
console.log(lowerCase)
var numeric = '0123456789';
console.log(numeric)
var specialCharacter = '@#$!&%';
console.log(specialCharacter)

var passwordarry =[];

function generatePassword () {
  var upasswordLength = prompt("How many passwords would you like in your password? \n Pick a number between 8 and 128.");
  var uupperCase = confirm("would you like upperCase? \nPress ok for yes. ress councel for no. Pick a letter.");
  var ulowerCase = confirm("would you like lowerCase? \nPress ok for yes. Press councel for no. Pick a letter.");
  var unumeric = confirm("would you like a numeric? \nPress ok for yes. Press councel for no. Pick a number.");
  var uspecialCharacter = confirm("would you like a specialCharacter? \nPress ok for yes. Press councel for no. Pick a character.");

  if (!upasswordLength && !ulowerCase && !uupperCase && !unumeric && !uspecialCharacter){
    alert("You need to choose atleast two types of characters to create a password.");
     return; generatePassword();
  }

  if (upasswordLength<9 || upasswordLength>128){
    alert("Your password must be 8 to 128 characters");
     return generatePassword();
  }

 if (ulowerCase){
   for (var i =0; i < lowerCase.length; i++){
    passwordarry.push(lowerCase[i]);
  }

  if (uupperCase){
    for (var i = 0; i < upperCase.length; i++){
      passwordarry.push(upperCase[i]);
    }
  }

  if (unumeric){
    for (var i = 0; i < numeric.length; i++){
      passwordarry.push(numeric[i]);
    }
  }

  if (uspecialCharacter){
    for (var i = 0; i < specialCharacter.length; i++){
      passwordarry.push(specialCharacter[i]);
    }
  }
  }

  var newerpassword = ""

  for (var i = 0; i < upasswordLength; i++){
    newerpassword = newerpassword + passwordarry[Math.floor(Math.random()*passwordarry.length)]
  }
  console.log(passwordarry)
   console.log(newerpassword)
   return newerpassword; 

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
