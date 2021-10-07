let form = document.querySelector('form');

//Ecouter la modification du prénom
form.first.addEventListener('change', function() {
    validFirst(this)
});

//Ecouter la modification du nom
form.last.addEventListener('change', function() {
    validLast(this)
});

//Ecouter la modification de l'Email
form.email.addEventListener('change', function() {
    validEmail(this)
});

//Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validFirst(form.first) && validLast(form.last) && validEmail(form.email)) {
        displayModalSubmit();
        document.querySelector('form').reset();
        };
});


// VALIDATION Du Prénom
const validFirst = function(inputFirst) {

//Récupération du Paragraphe
    let error = inputFirst.nextElementSibling;

    if(/^[A-Za-z-]{2,20}$/.test(inputFirst.value)){
        error.innerHTML = " Prénom Accepté";
        error.classList.remove('text-danger');
        error.classList.add('text-sucess');
        first.style.border = 'solid green 0.19rem';
        return true;
    }
    else {
        error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le Prénom et aucun chiffre";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        first.style.border = 'solid red 0.19rem';
        return false;
    }
};

// VALIDATION Du Prénom
const validLast = function(inputLast) {

    //Récupération du Paragraphe
        let error = inputLast.nextElementSibling;
    
        if(/^[A-Za-z-]{2,20}$/.test(inputLast.value)){
            error.innerHTML = " Nom Accepté";
            error.classList.remove('text-danger');
            error.classList.add('text-sucess');
            last.style.border = 'solid green 0.19rem';
            return true;
        }
        else {
            error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le Nom et aucun chiffre";
            error.classList.remove('text-sucess');
            error.classList.add('text-danger');
            last.style.border = 'solid red 0.19rem';
            return false;
        }
    };

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
        return true;
    }
    else {
        error.innerHTML = "Adresse Email Non Valide";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        email.style.border = 'solid red 0.19rem';
        return false;
    }
};