export const formulaire = `
<form action="" id="forms">
    <div id="container">
        <div class="success"></div>
        <div class="form-group">
            <input type="text" name="nom" id="nom" class="input form-control" placeholder="Nom">
            <span class="name-error"></span>
        </div>
        <div class="form-group">
            <input type="text" name="prenoms" class="input form-control" placeholder="Prénoms">
            <span class="firstname-error"></span>
        </div>
        <div class="form-group">
            <input type="date" id="date" name="date_naissance" class="input form-control">
            <span class="birthday-error"></span>
        </div>
        <div id="genre">
            <span>Genre:</span>
            <input type="radio" name="genre" value="Masculin"> Masculin
            <input type="radio" name="genre" value="Féminin"> Féminin<br>
            <span class="gender-error"></span>
        </div>
        
        <div id="status">
            <span>Status de l'handicap:</span>
            <input type="radio" id="oui" name="status" value="Oui"> Oui
            <input type="radio" id="non" name="status" value="Non"> Non<br>
            <span class="status-error"></span>
        </div>
       
        <div class="form-group">
            <textarea name="description" id="description" class="input form-control" cols="30" rows="10" placeholder="Description de l'handicap"></textarea>
            <span class="description-error"></span>
        </div>
        
        <div class="form-group">
            <input type="text" id="phone" class="input form-control" name="phone" placeholder="Numéro de Téléphone (2221002345)">
            <span class="phone-error"></span>
        </div>
       
        <div class="form-group">
            <button type="button" name="soumettre" id="soumettre">SOUMETTRE</button>
        </div>
    </div>
</form>
`;

