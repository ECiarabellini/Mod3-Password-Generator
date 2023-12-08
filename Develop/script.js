// Assignment code here


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


function generatePassword() {
  // prompt for user for password length: 8 - 128 characters
  var verification;    
  var pwdLength = prompt("Specify the length of the password needed between 8 - 128.");

  while (!verification) {
    var allowLowerCase = prompt("Include lowercase letters? Click OK for Yes, Click Cancel for No");
    var allowUpperCase = prompt("Include uppercase letters? Click OK for Yes, Click Cancel for No");
    var allowNumeric = prompt("Include numbers? Click OK for Yes, Click Cancel for No");
    var allowSpecialChars = prompt("Include special characters? Click OK for Yes, Click Cancel for No");  
    
    // validate at least one of the 4 types was selected, if not, ask again
    if (allowLowerCase==="" || allowUpperCase==="" || allowNumeric==="" || allowSpecialChars===""){
      verification = 1;
    } else {
        prompt("Must click OK for at least one option. Try again.");
      }
  }

  // create arrays of each type: ie [1,2,3,4,5,6,7] 
  var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 length
  var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 length
  var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 length
  var specialChars = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']; //30 legth
  
  // generate password that matches criteria:
  //   - exclude any array that user selected NO to 
  




  //   - random number to select which array to pick from (length of how many YESes... increment during dialogue), 
  //    then random number length of array items to select item in array, save to password






  console.log('pwdLength is ', pwdLength);
  console.log('allowLowerCase is ', allowLowerCase);
  console.log('allowUpperCase is ', allowUpperCase);
  console.log('allowNumeric is ', allowNumeric);
  console.log('allowSpecialChars is ', allowSpecialChars);
  // console.log(verification);
  // console.log(!verification);
  console.log(specialChars.length);







  return password;

}
