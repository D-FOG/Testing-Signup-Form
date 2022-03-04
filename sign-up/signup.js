const form = document.getElementById('form');          //get form id
//get id of each form name
const firstname = document.getElementById('firstname'); 
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//add event listener
form.addEventListener('click', (e) => {
    e.preventDefault();                 //this line prevents empty forms from being submitted
    
    checkInputs();            //this line makes a call to the checkInputs function
})

//create a function for the form validation
function checkInputs() {
    //GET VALUES FROM INPUTS
   const firstnameValue = firstname.value.trim();
   const lastnameValue = lastname.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();

    if(firstnameValue === ''){
        //SHOW AN ERROR
        //ADD ERROR MESSAGE
        setErrorFor(firstname, 'firstname cannot be blank');    //this makes a call to the setErrorFor function for error

    } else if(!isLetter(firstnameValue)) {                     //this tests the form values based on the isLetter function

        setErrorFor(firstname, 'firstname cannot be a number');
   
    } else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(firstname);                        //if there is no error, call setSuccessfor function
    }



    if(lastnameValue === ''){
        //SHOW AN ERROR
        //ADD ERROR MESSAGE
        setErrorFor(lastname, 'lastname cannot be blank');

    } else if(!isLetter(lastnameValue)) {

        setErrorFor(lastname, 'lastname cannot be a number');
   
    }else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(lastname);
    }

    if(emailValue === ''){
        //SHOW AN ERROR
        //ADD ERROR MESSAGE
        setErrorFor(email, 'email cannot be blank');

    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'email is not valid');
    }
     else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        //SHOW AN ERROR
        //ADD ERROR MESSAGE
        setErrorFor(password, 'password cannot be blank');

    }else if(!isLength(passwordValue)){
        
        setErrorFor(password, 'password cannot be less than 8 characters');
    }
     else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(password);
    }

    if(password2Value === ''){
        //SHOW AN ERROR
        //ADD ERROR MESSAGE
        setErrorFor(password2, 'Cannot be blank');

    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'the password does not match');
    }
     else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(password2);
    }
}

//create the function to call for errors
function setErrorFor(input, message){
    const formGroup = input.parentElement;
    const small =formGroup.querySelector('small');   //this makes a query to the css

    //ADD ERROR MESSASEGE
    small.innerText = message;
    
    formGroup.className = 'form-group error';

}

//create the function to call for success
function setSuccessFor(input) {
    const formGroup = input.parentElement;

        //ADD Success
    formGroup.className = 'form-group success';
}

/*create the funtions used in the checkInputs function to check form values
  I created tests on these functions to test them in the sign_up test folder
*/
function isLetter(firstname){
    return /^[a-zA-Z]+$/.test(firstname);
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isLength(password){
    return /^([a-zA-Z0-9_-]){8,1000}$/.test(password);
}
