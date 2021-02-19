import {formulaire} from "./formulaire.js"
//Variable pour récupérer les valeurs de tous les champs du formulaire
let forms = document.getElementById("formulaire");
//regex pour définir les caractères autorisés
let regex = /^[A-Za-z0-9]+$/
//on injecte le formulaire dans le fichier index.html
forms.innerHTML = formulaire;
//variable qui récupère la valeur du champ téléphone
let phone = document.getElementsByName("phone")[0].value;
//on désactive le boutton soumettre par défaut
document.getElementById("soumettre").disabled=true;
//on écoute l'événement au click sur le bouton soumettre
document.getElementById("soumettre").addEventListener("click",soumettre);
//on défini la fonction soumettre qui va gérer le traitement du formulaire
function soumettre(){
    //déclaration des variables
    let nom = document.getElementsByName("nom")[0].value;
    let prenoms = document.getElementsByName("prenoms")[0].value;
    let date_naissance = document.getElementsByName("date_naissance")[0].value;
    let genre = document.querySelectorAll('input[name="genre"]:checked');
    let status = document.querySelectorAll('input[name="status"]:checked');
    let description = document.getElementsByName("description")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    
    //oébut du traitement
    //console.log(status.length);
    //si le champ nom ne contient aucune valeur afficher le message "Ce champ est requis"
    if(nom.length===0){
        document.querySelector('.name-error').innerHTML = "Ce champ est requis";
        /*sinon si le champ nom contient 1 caractère afficher le message 
        "(2) caractères minimum" */
    }else if(nom.length < 2){
        document.querySelector('.name-error').innerHTML = "(2) caractères minimum";
        /*sinon si le champ nom contient des caractères spéciaux afficher le message 
        "Les caractères spéciaux ne sont pas autorisés"*/
    }else if(!regex.test(nom)){
        document.querySelector('.name-error').innerHTML = "Les caractères spéciaux ne sont pas autorisés";
        /*sinon si le champ prénoms ne contient pas de caractères afficher le message 
        "Ce champ est requis"*/
    }else if(prenoms.length===0){
        document.querySelector('.firstname-error').innerHTML = "Ce champ est requis";
        /*sinon si le champ prénoms contient des caractères spéciaux afficher le message 
        "Les caractères spéciaux ne sont pas autorisés"*/
    }else if(!regex.test(prenoms)){
        document.querySelector('.firstname-error').innerHTML = "Les caractères spéciaux ne sont pas autorisés";
        /*sinon si le champ prénoms contient 1 caractère afficher le message 
        "(2) caractères minimum"*/
    }else if(prenoms.length < 2){
        document.querySelector('.firstname-error').innerHTML = "(2) caractères minimum";
    }
    /*sinon si le champ date de naissance n est pas renseigné afficher le message 
        "Ce champ est requis"*/
    else if(date_naissance==""){
        document.querySelector('.birthday-error').innerHTML = "Ce champ est requis";
    }
    /*sinon si le genre n"est pas sélectionné afficher le message 
        "Ce champ est requis"*/
    else if(genre.length===0){
        document.querySelector('.gender-error').innerHTML = "Ce champ est requis";
    }
    /*sinon si le status n"est pas sélectionné afficher le message 
        "Ce champ est requis"*/
    else if(status.length===0){
        document.querySelector('.status-error').innerHTML = "Ce champ est requis";
    }
    /*sinon le champ téléphone est vide  afficher le message 
        "Ce champ est requis"*/
    else if(phone==""){
        document.querySelector('.phone-error').innerHTML = "Ce champ est requis";
        /*sinon si le numéro de téléphone contient des caractères afficher le message 
        "Seulement les chiffres sont autorisés"*/
    }else if(isNaN(phone)){
        document.querySelector('.phone-error').innerHTML = "Seulement les chiffres sont autorisés";
    }
     /*sinon si le numéro de téléphone contient les 10 chiffres afficher le message 
        "Vous devez entrer un numéro de téléphone à 10 chiffres"*/
    else if(phone.length<10){
        document.querySelector('.phone-error').innerHTML = "Vous devez entrer un numéro de téléphone à 10 chiffres";
    }
    /*sinon le numéro de téléphone contient +225 enlever les "+225" et garder les 
    10 chiffres */
    else{
        if(phone.includes("+225")){
            phone = phone.replace(/\D+225/g, "");
            document.getElementsByName("phone")[0].value = phone;
        }
        //afficher un message après avoir fini de renseigner tous les champs
        let message = document.querySelector(".success");
        message.textContent = "VOS INFORMATIONS ONT ETE ENREGISTRÉES";
        //vider les champs du formulaire
        document.getElementById("forms").reset();
    }
}
//on récupère tous les champs du formulaire
let AllInputs = document.getElementById("forms");
//on déclare un tableau
let tabs = [];
//on écoute l événement on change sur tous les champs du formulaire
AllInputs.addEventListener("change",(event)=>{
    //à chaque fois qu'on rempli un champ on ajoute la valeur dans le tableau
    tabs.push(event.target.value);
    //console.log(tabs.length);
    /* si le tableau contient au moins 6 valeurs , cela veut dire qu'on a rempli 
    tous les champs du formulaire  donc on active maintenant le bouton soumettre*/
    if(tabs.length >=6){
        document.getElementById("soumettre").disabled=false;
    }
});

/*déclaration des variables permettant de sélectionner le bouton radio oui , 
non et le champ description */
let status_radio_oui = document.querySelector("#oui");
let status_radio_non = document.querySelector("#non");
let description_field = document.querySelector("#description");
description_field.style.display = 'none';
//on affiche le champ description lorsqu'on clique sur le bouton oui
status_radio_oui.onclick = function(){
    description_field.style.display = 'block';
}
//on cache le champ description lorsqu'on clique sur le bouton non
status_radio_non.onclick = function(){
    description_field.style.display = 'none';
}
//on défini une date départ à 2000-01-01 pour le champ date de naissance
document.getElementById("date").value = "2000-01-01";
//traitement concernant le numéro de téléphone
//on écoute l'événement 'On change' sur le champ téléphone
document.getElementsByName("phone")[0].addEventListener("change",checking)
//on défini la fonction de vérification "checking"
function checking(){
    //on récup-re le numero de téléphone saisi en entier avec le +225
    let phoneNumber = document.getElementsByName("phone")[0].value;
    //on vérifie si le numéro de téléphone contient le +225
    if(phoneNumber.includes("+225")){
        //si oui on le retire 
        phoneNumber = phoneNumber.replace(/\D+225/g, "");
        //on garde maintenant les 10 chhiffres
        document.getElementsByName("phone")[0].value = phoneNumber;
    }
}