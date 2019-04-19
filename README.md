<h2>Ressources</h2>

Consulter W3Schools (https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default) pour tester votre code en ligne en temps réel.

Raccourcis sur Visual Studio Code :
<li>Formater code = CTR + SHIFT + F</li>
<li>Commenter code = CTR + :</li>

<h2>Head</h2>

Le titre est obligatoire dans les méta-informations.

<h2>Body</h2>

Créer un formulaire qui permettra d'entrer le nom de l'utilisateur.

    <body>
        <form>
            ...
        </form>
    </body>

**table** permet de créer un tableau avec un nombre de lignes et de colonnes définis a posteriori. Le paramètre **border** définit le type d'encadrement du tableau (ligne fine, effet 3D...).

    <table border="1">
        ...
    </table>

La balise **tr** permet de **créer une ligne**. La balise **td** permet de **créer une colonne**. Le code ci-dessous crée 1 ligne contenant 2 colonnes (zone d'affichage puis zone d'édition).

On peut entrer du texte grâce à la balise **input**, qui peut prendre plusieurs types (**text**, **button**...). Il possède plusieurs paramètres :

<li>Le paramètre <strong>id</strong> permet d'identifer une balise de manière unique.
<li>Le paramètre <strong>placeholder</strong> affiche un message dans la zone d'entrée de texte.
<li>L'attribut <strong>required</strong> n'est pas nécessaire, il indique qu'une entrée est obligatoire (encadre la zone d'entrée en rouge).


    <tr>
        <td>
           Taille
        </td>
        <td>
            <input type="text" id="txtTaille" placeholder="Votre taille" required/>
        </td>
    </tr>

Demander le genre de l'utilisateur : on n'utilisae pas de **input** d'un type particulier ! On a recourt à la balise **select** pour proposer plusieurs options à l'utilisateur. La valeur de ce **select** dépendra du choix de l'utilisateur.

    <tr>
        <td>Genre</td>
        <td>
            <select id="lstGenre">
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
            </select>
        </td>
    </tr>

Le bouton "Calculer IMC" exécutera une fonction définie dans les balises **script** (voir plus bas) chaque fois qu'il sera cliqué (paramètre **onclick="MaFonction()"**) :

    <input type="button" id="cmdCalculer" onclick="Traitement()" value="Calculer IMC">

Dans un souci d'affichage, **td colspan="2" align="center"** nous sert à préciser l'emplacement du bouton par rapport aux colonnes affichées au-dessus.

    <tr>
        <td colspan="2" align="center">
            <input type="button" id="cmdCalculer" onclick="MaFonction()" value="Calculer IMC">
        </td>
    </tr>

On affiche ensuite un bouton qui demandera de calculer l'IMC de l'utilisateur.

<h2>Script et fonctions</h2>

**script** permet de créer des variables et des fonctions *propres au fichier* (= on ne peut pas les utiliser depuis un autre fichier .html). On l'ajoute à la toute fin du **body**.

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

Ecrire une fonction calculant et affichant l'IMC :

    <script>
        function Traitement() {
            var poids = document.getElementById("txtPoids").value;
            var taille = document.getElementById("txtTaille").value;
            document.getElementById("txtIMC").value = poids / (taille**2);
        }
    </script>

Une fonction peut en appeler une autre :

    <script>
        function IMC(p,t) {
            return p/(t*t);
        }
        
        function Traitement() {
            var poids = document.getElementById("txtPoids").value;
            var taille = document.getElementById("txtTaille").value;
            
            document.getElementById("txtMin").value = 19*(taille**2);
            document.getElementById("txtIMC").value = IMC(poids,taille);
        }
    </script>

JavaScript est capable d'importer des classes et des méthodes pré-enregistrées (Math...). La fonction ci-dessous renvoie une valeur arrondie au dixième :

    function arrondi(n) {
        return Math.round(n*100)/100;
    }

<h2>Sources</h2>

Les fonctions que nous avons créées entre les balises script peuvent être stockées dans un fichier JavaScript (extension **.js**). On peut donc remplacer le contenu de nos balises script par :

    <script src="./sources.js"></script>
