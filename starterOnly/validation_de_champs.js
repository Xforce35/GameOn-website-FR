let form = document.querySelector('form');

//Ecouter la modification de l'Email
form.email.addEventListener('change', function() {
    validEmail(this)
});

//Ecouter la modification du prénom
form.first.addEventListener('change', function() {
    validFirst(this)
});

// VALIDATION DE L'EMAIL
const validEmail = function(inputEmail) {
    let EmailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

//Récupération du Paragraphe
    let error = inputEmail.nextElementSibling;

//On teste l'expréssion régulière
    if (EmailRegExp.test(inputEmail.value)) {
        error.innerHTML = " Adresse Email Valide";
        error.classList.remove('text-danger');
        error.classList.add('text-sucess');
        email.style.border = 'solid green 0.19rem';
    }
    else {
        error.innerHTML = "Adresse Email Non Valide";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        email.style.border = 'solid red 0.19rem';
    }
};

// VALIDATION DE L'EMAIL
const validFirst = function(inputFirst) {

    let error = inputFirst.nextElementSibling;

    if(/^[A-Za-z-]{2,20}$/.test(inputFirst.value)){
        error.innerHTML = " Prénom Accepté";
        error.classList.remove('text-danger');
        error.classList.add('text-sucess');
        first.style.border = 'solid green 0.19rem';
    }
    else {
        error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom et aucun chiffre";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        first.style.border = 'solid red 0.19rem';
    }
};
