const form = document.getElementById("formulaire")
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
createForm.appendChild(nomInput)

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
genreInput_yes.setAttribute("type","radio")
createForm.appendChild(genreInput_yes)
//label Oui
const genreLabel_yes = document.createElement("label")
genreLabel_yes.innerHTML = "Oui";
createForm.appendChild(genreLabel_yes)
//status 
const genreInput_no = document.createElement("input")
genreInput_no.setAttribute("name","status")
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

//numéro de téléphone

var button = document.createElement("button");
button.innerHTML = "Soumettre";
button.setAttribute("type","button")
button.setAttribute("id","soumettre")
createForm.appendChild(button)


