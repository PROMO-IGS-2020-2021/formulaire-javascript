const form = document.getElementById("formulaire")
//label error
let nom_error = document.createElement("label")
nom_error.setAttribute("class","error");
// title
const heading = document.createElement("h2")

heading.setAttribute("id","title");
heading.innerHTML = "FORMULAIRE DE RENSEIGNEMENT";
form.appendChild(heading)

// création du formulaire
const createForm = document.createElement("form");

//ajouter les attributs
createForm.setAttribute("action","");
createForm.setAttribute("method","post");
form.appendChild(createForm)

//------------------les champs------------------------------------- 
//-------------------------nom------------------------------------

const nomInput = document.createElement("input")
nomInput.setAttribute("placeholder","Votre Nom....")
nomInput.setAttribute("id","nom")
nomInput.setAttribute("type","text")
createForm.appendChild(nomInput);
createForm.appendChild(nom_error);


//-------------------------prénoms-----------------------------------

const prenomsInput = document.createElement("input")
prenomsInput.setAttribute("placeholder","Votre prenoms....")
prenomsInput.setAttribute("id","prenoms")
prenomsInput.setAttribute("type","text")
createForm.appendChild(prenomsInput)

//-------------------------date de naissance----------------------------------

const dateInput = document.createElement("input")
dateInput.setAttribute("placeholder","Votre date....")
dateInput.setAttribute("id","date")
dateInput.setAttribute("type","date")
createForm.appendChild(dateInput)
//-------------------------genre----------------------------------
//label
const genreLabel = document.createElement("label")
genreLabel.innerHTML = "Status de l'handicap:";
createForm.appendChild(genreLabel)
//status yes
const genreInput_yes = document.createElement("input")
genreInput_yes.setAttribute("name","status")
genreInput_yes.setAttribute("id","genre_yes")
genreInput_yes.setAttribute("value","oui")
genreInput_yes.setAttribute("type","radio")
createForm.appendChild(genreInput_yes)
//label Oui
const genreLabel_yes = document.createElement("label")
genreLabel_yes.innerHTML = "Oui";
createForm.appendChild(genreLabel_yes)
//status 
const genreInput_no = document.createElement("input")
genreInput_no.setAttribute("name","status")
genreInput_no.setAttribute("checked","checked")
genreInput_no.setAttribute("id","genre_no")
genreInput_no.setAttribute("value","non")
genreInput_no.setAttribute("type","radio")
createForm.appendChild(genreInput_no)

//label No
const genreLabel_no = document.createElement("label")
genreLabel_no.innerHTML = "Non";
createForm.appendChild(genreLabel_no)
const br = document.createElement("br")
createForm.appendChild(br)

//description

const descriptionInput = document.createElement("textarea")
descriptionInput.setAttribute("placeholder","Description de l'handicap")
descriptionInput.setAttribute("name","description")
descriptionInput.setAttribute("id","description")
descriptionInput.setAttribute("cols","93")
descriptionInput.setAttribute("rows","10")
createForm.appendChild(descriptionInput)
//numéro de téléphone

const telephoneInput = document.createElement("input")
telephoneInput.setAttribute("placeholder","Numéro de Téléphone")
telephoneInput.setAttribute("type","tel")
telephoneInput.setAttribute("name","telephone")
telephoneInput.setAttribute("id","telephone")
createForm.appendChild(telephoneInput)
//bouton submit

var button = document.createElement("button");
button.innerHTML = "Soumettre";
button.setAttribute("type","button")
button.setAttribute("id","soumettre")
createForm.appendChild(button)


//form process
let nom = document.getElementById("nom").value;
let prenoms = document.getElementById("prenoms").value;
let message = document.querySelector(".error");
if(nom==""){
    message.innerHTML = "<span class='error-class'>Ce champ est requis</span>";
}else if(prenoms==""){
    message.innerHTML = "<span class='error-class'>Ce champ est requis</span>";
}
let status_yes = document.querySelector("#genre_yes");
let status_no = document.querySelector("#genre_no");
let description = document.querySelector("#description");

description.style.display ='none';

status_yes.onclick=function(){
    description.style.display ='block';
}
status_no.onclick=function(){
    description.style.display ='none';
}