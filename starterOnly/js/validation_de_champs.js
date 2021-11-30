//VARIABLE GLOBALE

const allLocations = document.getElementById('allLocations');
const birthdate = document.getElementById('birthdate');
const button = document.querySelector('.btn-submit');
const cities = document.querySelectorAll('input[name="location"]');
const email = document.getElementById('email');
const firstName = document.getElementById('first');
const form = document.querySelector('form');
const lastName = document.getElementById('last');
const genCondUse = document.getElementById('checkbox1');
const quantity = document.getElementById('quantity');

// SCENARIO
disableButton();
firstName.addEventListener('focusout', validateFisrt);
lastName.addEventListener('focusout',validateLast);
email.addEventListener('focusout',validateEmail);
birthdate.addEventListener('focusout',validateBirthdate);
quantity.addEventListener('focusout',validateQuantity);
genCondUse.addEventListener('click', validategenCondUse);
allLocations.addEventListener('click', validateCity);

//Ecouter la soumission du formulaire
form.addEventListener('change', function(e)
{
    if(validateAll())
    {
        enableButton();
    } else {
        disableButton();
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    displayModalSubmit();
    form.reset();
});

//VALIDATION DU PRÉNOM
function validateFisrt() {
    //On teste la différence de l'expréssion régulière
    if (!firstName.value.match(/^[A-Za-z- ]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        showError(firstName);
        return false;
    }
    //récupération du message d'erreur et le rendre invisible, ainsi que son style
    hideError(firstName);
    return true;
};

//VALIDATION DU NOM
function validateLast() {
    //On teste la différence de l'expréssion régulière
    if (!lastName.value.match(/^[A-Za-z- ]{2,20}$/)) {
        //récupération du message d'erreur et le rendre visible, ainsi que son style
        showError(lastName);
        return false;
    }
    //récupération du message d'erreur et le rendre invisible, ainsi que son style
    hideError(lastName);
    return true;
};

//VALIDATION DE L'EMAIL
function validateEmail() {
    //On créé une constante avec une nouvelle expression régulière
    const EmailRegExp = new RegExp('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    //Si la valeur de l'input email est vide alors ça retourne faux
    if (email.value =="") {
        showError(email);
        return false; 
    }
    //On teste l'exprésion régulière, si ça marche, ça retourne vrai
    if (EmailRegExp.test(email.value)) {
        hideError(email);
        return true;
    }
    //si ça marche pas, ça retourne faux
   showError(email);
    return false;
};

//VALIDATION DE LA DATE DE NAISSANCE
function validateBirthdate() {
    //On créé une constante avec la valeur que l'utilisateur a rentré dans l'input birthdate
    const dtDOB = new Date(birthdate.value);
    //On créé une constante avec la valeur de la date du jour
    const dtCurrent = new Date();
    // on vérifie qu'il y est 10 caractère d'entrer sinon ça retourne faux
    if (birthdate.value.trim().length !== 10) {
        showError(birthdate);
        return false; 
    }
    // ici, on vérifie si la date d'anniversaire de l'utilisateur et celle du jour est inférieur à 18 ans et ça retourne faux
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        showError(birthdate);
        return false;
    } 
    // ici, on vérifie si la date d'anniversaire de l'utilisateur et celle du jour est supérieur à 18 ans et ça retourne vrai
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 18) {
        hideError(birthdate);
        return true;
    }
};

//VALIDATION DU NOMBRE DE TOURNOIS
function validateQuantity() {
    //Si la valeur de l'input quantity(nombre de tournois participer par l'utilisateur) est vide alors ça retourne faux
    if(quantity.value == "") {
        showError(quantity);
        return false;
        }
    //On teste la différence avec cette nouvelle regex qui accepte que des chiffres de 0 a 9, une fois a deux fois chacun, si différent retourne faux
    if(!quantity.value.match(/^[0-9]{1,2}$/)) {
        showError(quantity);
        return false;
        }
    //Sinon retourne vrai
    hideError(quantity);
    return true;
};

//VALIDATION DE LA VILLE

function validateCity() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

//VALIDATION DES CONDITIONS GÉNÉRALES
function validategenCondUse() {
//Ici, on vérifie que la case des conditions générales d'utulisation soit soit coché donc checké, ce qui retourne vrai
if (genCondUse.checked === false){
    showError(genCondUse);
    return false;
}
//Si ce n'est pas le cas, ça retourne faux
hideError(genCondUse);
return true;
}

//Fonction pour valider tous les champs
function validateAll() {
    if (validateFisrt() &&
        validateLast()  &&
        validateEmail() &&
        validateBirthdate() &&
        validateQuantity()&&
        validateCity()&&
        validategenCondUse() ) {
        return true;
    }
    return false;
}

// Fontion pour afficher ou cacher le style et l'erreur de chaque champs
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


// Fonction activer ou desactive ainsi que le style du bouton SUBMIT
function enableButton() {
    button.removeAttribute('disabled');
    button.style.opacity = 1;
    button.style.cursor = 'pointer';
}

function disableButton() {
    button.setAttribute('disabled', true);
    button.style.backgroundColor = "#3876ac";
    button.style.opacity = 0.5;
    button.style.cursor = 'not-allowed'
}

