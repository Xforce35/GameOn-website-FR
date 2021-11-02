let form = document.querySelector('form');

//Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validFirst(form.first) && validLast(form.last) && validEmail(form.email) && validBirthdate(form.birthdate) && validQuantity(form.quantity)) {
        displayModalSubmit();
        document.querySelector('form').reset();
        };
});

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

//Ecouter la modification de la Date de Naissance
form.birthdate.addEventListener('change', function() {
    validBirthdate(this)
});

//Ecouter la modification du nombre de tournoi
form.quantity.addEventListener('change', function() {
    validQuantity(this)
});


for (var i=0; i< location.length; i++) {
    form.location[i].addEventListener('change', function() {
        validLocation(this)
    });
}




// VALIDATION Du Prénom
const validFirst = function(inputFirst) {

    //Récupération du Paragraphe
    let error = inputFirst.nextElementSibling;

    //On teste l'expréssion régulière
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
    
     //On teste l'expréssion régulière   
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

// VALIDATION DE LA DATE D'ANNIVERSAIRE
const validBirthdate = function(inputDate) {
    const dtDOB = new Date(inputDate.value);
    const dtCurrent = new Date();
    //Récupération du Paragraphe
    let error = inputDate.nextElementSibling;

    //On teste la fonction   
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        error.innerHTML = "Vous devez avoir plus de 18 ans";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        birthdate.style.border = 'solid red 0.19rem';
        return false;
    }
   if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 18) {
        error.innerHTML = " Date de naissance Valide";
        error.classList.remove('text-danger');
        error.classList.add('text-sucess');
        email.style.border = 'solid green 0.19rem';
        return true;
    }
};

// VALIDATION DU NOMBRE DE TOURNOI PARTICIPÉ
const validQuantity = function(inputQuantity) {

    //Récupération du Paragraphe
    let error = inputQuantity.nextElementSibling;

    if(inputQuantity.value == "") {
        error.innerHTML = "Merci de faire votre choix";
        error.classList.remove('text-sucess');
        error.classList.add('text-danger');
        quantity.style.border = 'solid red 0.19rem';
        return false;
    }
    else {
        error.innerHTML = " Merci";
        error.classList.remove('text-danger');
        error.classList.add('text-sucess');
        quantity.style.border = 'solid green 0.19rem';
        return true;
    }
};

const validLocation = function(inputLocation) {

    let error = document.querySelector("#error-location");
    const formData = document.querySelectorAll(".formData");

   let checkboxCity= false;
   const checkLocation = formData[5].querySelectorAll(".checkbox-input");
   checkLocation.forEach(city =>{
       if (city.checked) {
            error.innerHTML = "c'est bon";
            checkboxCity = true;
           
       }
   });
};