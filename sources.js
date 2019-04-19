
// Afficher l'IMC
function Traitement() {
    var nom = document.getElementById("txtNom").value
    var prenom = document.getElementById("txtPrenom").value
    var poids = document.getElementById("txtPoids").value
    var taille = document.getElementById("txtTaille").value
    var genre = document.getElementById("lstGenre").value

    // on crée un objet de classe Personne et on affiche son profil
    var p = new Personne(nom, prenom, taille, poids, genre)
    p.Affiche()
}

// Arrondir un nombre au centième
function arrondi(n){
    return Math.round(n*100)/100
}

// Classe Personne()
function Personne(nom, prenom, taille, poids, genre) {
    this.Nom = nom
    this.Prenom = prenom
    this.Taille = taille
    this.Poids = poids
    this.Genre = genre

    this.CalculeIMC = function () {
        return this.Poids / (this.Taille ** 2)
    }

    this.Diagnostic = function () {
        if (this.CalculeIMC() < 17) {
            return "anorexique"
        }
        else if (this.CalculeIMC() < 19) {
            return "maigre"
        }
        else if (this.CalculeIMC() < 25) {
            return "en super forme"
        }
        else if (this.CalculeIMC() < 30) {
            return "un peu trop lourd"
        }
        else if (this.CalculeIMC() < 40) {
            return "obèse léger"
        }
        else {
            return "obèse morbide"
        }
    }

    this.PoidsMin = function () {
        return 19 * (this.Taille ** 2)
    }

    this.PoidsMax = function () {
        return 25 * (this.Taille ** 2)
    }

    this.PoidsIdeal = function () {
        var tailleCM = this.Taille * 100
        if (this.Genre == "masculin") {
            return tailleCM - 100 - ((tailleCM - 150) / 4) + " kg"
        }
        return tailleCM - 100 - ((tailleCM - 150) / 2.5) + " kg"
    }

    this.Affiche = function () {
        var imc_arr = arrondi(this.CalculeIMC())
        var min_arr = Math.round(this.PoidsMin()) +" kg"
        var max_arr = Math.round(this.PoidsMax()) +" kg"

        document.getElementById("txtIMC").value = imc_arr
        document.getElementById("txtMin").value = min_arr
        document.getElementById("txtMax").value = max_arr
        document.getElementById("txtIdeal").value = this.PoidsIdeal()
        document.getElementById("txtDiagnostic").value = this.Diagnostic()

        alert(this.Prenom + " " + this.Nom + " a un IMC de " + imc_arr
            + "\n\nSon poids peut varier entre " + min_arr + " et " + max_arr
            + "\n\nSon poids idéal serait " + this.PoidsIdeal()
            + "\n\nEn conclusion, il/elle est " + this.Diagnostic())
    }

}