// $(document).ready(function () {
//     function init() {
//         if (localStorage["name"]) {
//             $('#name').val(localStorage["name"]);
//         }
//         if (localStorage["email"]) {
//             $('#email').val(localStorage["email"]);
//         }
//         if (localStorage["message"]) {
//             $('#message').val(localStorage["message"]);
//         }
//         if (localStorage["gender"]) {
//             $('#gender').val(localStorage["gender"]);
//         }
//         if (localStorage["country"]) {
//             $('#country').val(localStorage["country"]);
//         }
//         if (localStorage["address"]) {
//             $('#address').val(localStorage["address"]);
//         }
//         if (localStorage["password"]) {
//             $('#password').val(localStorage["password"]);
//         }
//         if (localStorage["passwordCheck"]) {
//             $('#passwordCheck').val(localStorage["passwordCheck"]);
//         }
//         if (localStorage["newsletter"]) {
//             $('#newsletter').val(localStorage["newsletter"]);
//         }
//     }
//     init();
// });

// $('.stored').change(function () {
//     localStorage[$(this).attr('name')] = $(this).val();
// });


    // function getGender() {
    //     return document.querySelector('input[name="gender"]: checked');
    // }
    
    let fields = { };
    document.addEventListener("DOMContentLoaded", function() {
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.address = document.getElementById('address');
        fields.country = document.getElementById('country');
        fields.password = document.getElementById('password');
        fields.passwordCheck = document.getElementById('passwordCheck');
        fields.newsletter = document.getElementById('newsletter');
        fields.question = document.getElementById('message');
       });
    
       function isNotEmpty(value) {
        if (value == null || typeof value == 'undefined' ) return false;
        return (value.length > 0);
       };  // to check that value isn't null or undefined
    
    // if we had a number attribute, this can be used to confirm if really a number was inputed
    //    function isNumber(num) {
    //     return (num.length > 0) && !isNaN(num);
    //    }
    
    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
       };  //checking if really an email was inputed
    
       function isPasswordValid(password) {
        if (password.length > 8) {
        return true;
        }
        if (password.length == "/^[a-zA-Z0-9]/") {
            return true
        }
        return false
       }; //checking if password has at least 8 characters
    
       function fieldValidation(field, validationFunction) {
        if (field == null) return false;
       
        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
        field.className = 'placeholderRed';
        } else {
        field.className = '';
        }
       
        return isFieldValid;
       }; //we're creating a function for validation of fields

       function isValid() {
        var valid = true;
        
        valid &= fieldValidation(fields.firstName, isNotEmpty);
        valid &= fieldValidation(fields.lastName, isNotEmpty);
        valid &= fieldValidation(fields.gender, isNotEmpty);
        valid &= fieldValidation(fields.address, isNotEmpty);
        valid &= fieldValidation(fields.country, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.houseNumber, isNumber);
        valid &= fieldValidation(fields.password, isPasswordValid);
        valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
        valid &= fieldValidation(fields.question, isNotEmpty);
        valid &= arePasswordsEqual();
       
        return valid;
       //form validation
    
       function arePasswordsEqual() {
        if (fields.password.value == fields.passwordCheck.value) {
        fields.password.className = 'placeholderRed';
        fields.passwordCheck.className = 'placeholderRed';
        return true;
        }
        return false
       }; //custom valid check for password
    };
       class User {
        constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.country = country;
        this.email = email;
        this.newsletter = newsletter;
        this.question = question;
        }
       }; //user class for sending form
    
  
//        var x = document.getElementById("sendContact");
// x.addEventListenerfunction("click", function() {
    function sendContact(){
        fields.gender = getGender();
          if (isValid()) {
              let usr = new User(firstName.value, lastName.value, fields.gender.value, country.value, address.value, email.value, newsletter.checked);
    
              alert(`${usr.firstName} Thanks for Registering `)
          } else {
              alert("There was an error")
          };
    }
    $('.stored').change(function () {
        localStorage[$(this).attr('name')] = $(this).val();
    })
    


