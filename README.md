<h2>Ressources</h2>

Consulter W3Schools (https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default) pour tester votre code en ligne en temps réel.

<h2>Head</h2>

Le titre est obligatoire dans les méta-informations.

<h2>Body</h2>

Créer un formulaire qui permettra d'entrer le nom de l'utilisateur.

**table** permet de créer un tableau avec un nombre de lignes et de colonnes définis a posteriori. Le paramètre **border** définit le type d'encadrement du tableau.

    <table border="1">
    </table>

La balise **tr** permet de **créer une ligne**. La balise **td** permet de **créer une colonne**. Le code ci dessous crée 1 ligne contenant 2 colonnes (zone d'affichage puis zone d'édition).

Le paramètre **id** permet d'identifer une balise de manière unique. Le paramètre **placeholder** affiche un message dans la zone d'entrée de texte.

    <tr>
        <td>
           Nom
        </td>
        <td>
            <input type="text" id="txtNom" placeholder="Votre nom" required/>
        </td>
    </tr>

Le bouton "Calculer IMC" exécutera une fonction définie dans les balises **script** (voir plus bas) chaque fois qu'il est cliqué (paramètre **onclick="MaFonction()**) :

    <input type="button" id="cmdCalculer" onclick="Traitement()" value="Calculer IMC">

Dans un souci d'affichage, **td colspan="2" align="center"** nous sert à préciser l'emplacement du bouton par rapport aux colonnes affichées au-dessus.

    <tr>
        <td colspan="2" align="center">
            <input type="button" id="cmdCalculer" onclick="MaFonction()" value="Calculer IMC">
        </td>
    </tr>

On affiche ensuite un bouton qui demandera de calculer l'IMC de l'utilisateur.

<h2>Script</h2>

**script** permet de créer des variables propres à la page :

    <script>
        var nb = 12;
    </script>

**document.getElementById** permet de récupérer un élément de mon fichier pour son **id**

    <script>
        document.getElementById("txtIMC")
    </script>

On peut afficher le contenu de cet élément à l'intérieur d'un autre élément :

    <script>
        var nb = 12;
        document.getElementById("txtIMC").value = nb;
    </script>

Ecrire une fonction calculant l'IMC :

    <script>
        function Traitement(){
            var poids = document.getElementById("txtPoids").value;
            var taille = document.getElementById("txtTaille").value;
            document.getElementById("txtIMC").value = poids / (taille*taille);
        }
    </script>