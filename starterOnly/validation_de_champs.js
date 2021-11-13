//VARIABLE GLOBALE
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
let form = document.querySelector('form');

// SCENARIO
firstName.addEventListener('focusout', validateFisrt);
lastName.addEventListener('focusout',validateLast);
email.addEventListener('focusout',validateEmail);
birthdate.addEventListener('change',validateBirthdate);
quantity.addEventListener('focusout',validateQuantity);

//VALIDATION DU PRÉNOM
function validateFisrt() {
    //On teste la différence de l'expréssion régulière
    if (!firstName.value.match(/^[A-Za-z-]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        showError(firstName);
        return false;
    }
    hideError(firstName);
    return true;
};

//VALIDATION DU NOM
function validateLast() {
    //On teste la différence de l'expréssion régulière
    if (!lastName.value.match(/^[A-Za-z-]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        showError(lastName);
        return false;
    }
    hideError(lastName);
    return true;
};

//VALIDATION DE L'EMAIL
function validateEmail() {
    const EmailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    if (email.value =="") {
        showError(email);
        return false; 
    }
    if (EmailRegExp.test(email.value)) {
        showError(email);
        return true;
    }
   hideError(email);
    return false;
};

//VALIDATION DE LA DATE DE NAISSANCE
function validateBirthdate() {
    const dtDOB = new Date(birthdate.value);
    const dtCurrent = new Date();
    
    if (birthdate.value =="") {
        showError(birthdate);
        return false; 
    }
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        showError(birthdate);
        return false;
    } if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 18) {
        hideError(birthdate);
        return true;
    }
};

//VALIDATION DU NOMBRE DE TOURNOIS
function validateQuantity() {
    if(quantity.value == "") {
        showError(quantity);
        return false;
        }
    if(!quantity.value.match(/^[0-9]{1,2}$/)) {
        showError(quantity);
        return false;
        }
    hideError(quantity);
    return true;
};

//fonction pour 2couter les modifications des élèments html 
function sendAllFields(element, method, event) {
    element.addEventListener(event, method);
}

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

// afficher ou cacher le style et l'erreur de chaque champs
function showError(input)
{
    input.parentElement.setAttribute('data-error-visible', 'true');
    input.style.border = '2px solid #e54858';
}

function hideError(input)
{
    input.parentElement.setAttribute('data-error-visible', 'false');
    input.style.border = 'solid #279e7a 0.19rem';
}