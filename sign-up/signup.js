const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('click', (e) => {
    e.preventDefault();

    checkInputs();
})


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
        setErrorFor(firstname, 'firstname cannot be blank');

    } else if(!isLetter(firstnameValue)) {

        setErrorFor(firstname, 'firstname cannot be a number');
   
    } else {
        //ADD SUCCESS MESSAGE
        setSuccessFor(firstname);
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

function setErrorFor(input, message){
    const formGroup = input.parentElement; // THE FORM GROUP CLASS
    const small =formGroup.querySelector('small');

    //ADD ERROR MESSASEGE
    small.innerText = message;

    //ADD ERROR CLASS
    formGroup.className = 'form-group error';

}

function setSuccessFor(input) {
    const formGroup = input.parentElement;

        //ADD ERROR CLASS
    formGroup.className = 'form-group success';
}

function isLetter(firstname){
    return /^[a-zA-Z]+$/.test(firstname);
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isLength(password){
    return /^([a-zA-Z0-9_-]){8,1000}$/.test(password);
}
