//VALIDATION DU PRÉNOM
const firstName = document.getElementById('first');

function validateFisrt() {
    //On teste la différence de l'expréssion régulière
    if (!firstName.value.match(/^[A-Za-z-]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
};

//VALIDATION DU NOM
const lastName = document.getElementById('last');

function validateLast() {
    //On teste la différence de l'expréssion régulière
    if (!lastName.value.match(/^[A-Za-z-]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    last.parentElement.setAttribute('data-error-visible', 'false');
    last.style.border = 'solid #279e7a 0.19rem';
    return true;
};

//VALIDATION DE L'EMAIL
const email = document.getElementById('email');

function validateEmail() {
    const EmailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    if (EmailRegExp.test(email.value)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
};

//VALIDATION DE LA DATE DE NAISSANCE
const birthdate = document.getElementById('birthdate');

function validateBirthdate() {
    const dtDOB = new Date(birthdate.value);
    const dtCurrent = new Date();
    
    if (birthdate.value =="") {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = '2px solid #e54858';
        return false; 
    }
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        birthdate.parentElement.setAttribute('data-error2-visible', 'true');
        birthdate.style.border = '2px solid #e54858';
        return false;
    } if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 18) {
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        birthdate.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
};

//VALIDATION DU NOMBRE DE TOURNOIS
const quantity = document.getElementById('quantity');

function validateQuantity() {
    if(quantity.value == "") {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
};

//fonction pour 2couter les modifications des élèments html 
function sendAllFields(element, method, event) {
    element.addEventListener(event, method);
}
sendAllFields ( firstName, validateFisrt, 'focusout');
sendAllFields (lastName, validateLast, 'focusout');
sendAllFields (email, validateEmail, 'focusout');
sendAllFields ( birthdate, validateBirthdate, 'change');
sendAllFields (quantity, validateQuantity, 'focusout');


function forAllFieldsValidation() {
    validateFisrt()
    validateLast()
    validateEmail()
    validateBirthdate()
    validateQuantity()
}


//Fonction pour valider tous les champs
function allFieldsValide() {
    if (validateFisrt() === true &&
        validateLast() === true &&
        validateEmail() === true &&
        validateBirthdate() === true &&
        validateQuantity() === true ){
        return true;
    }
    return false;
}


let form = document.querySelector('form');

//Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (allFieldsValide() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
        } else {
            forAllFieldsValidation();
        }
});