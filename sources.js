// Calculer l'IMC
function IMC(p, t) {
    return p / (t**2);
}

function arrondi(n) {
    return Math.round(n * 100) / 100;
}

// Afficher un diagnostic selon l'IMC
function Diagnostic(imc) {
    var diag = "";
    if (imc < 17) {
        diag = "Anorexique";
    }
    else if (imc < 19) {
        diag = "Maigre";
    }
    else if (imc < 25) {
        diag = "Super forme";
    }
    else if (imc < 30) {
        diag = "Kilos en plus";
    }
    else if (imc < 40) {
        diag = "Obèse léger";
    }
    else {
        diag = "Obèse morbide";
    }
    document.getElementById("txtDiagnostic").value = diag;
}

// Afficher l'IMC
function Traitement() {
    var poids = document.getElementById("txtPoids").value;
    var taille = document.getElementById("txtTaille").value;
    var genre = document.getElementById("lstGenre").value;
    var imc = IMC(poids, taille);

    document.getElementById("txtIMC").value = arrondi(imc);
    document.getElementById("txtMin").value = arrondi(19 * (taille ** 2));
    document.getElementById("txtMax").value = arrondi(25 * (taille ** 2));

    // Les formules de poids idéal ci-dessous utilisent la taille EN CENTIMETRES
    taille = taille * 100;

    if (genre == "masculin") {
        document.getElementById("txtIdeal").value = arrondi(taille - 100 - ((taille - 150) / 4));
    }
    else {
        document.getElementById("txtIdeal").value = arrondi(taille - 100 - ((taille - 150) / 2.5));
    }

    Diagnostic(imc);
}
