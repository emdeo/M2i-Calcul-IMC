<h2>Ressources / raccourcis</h2>

Consulter W3Schools (https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default) pour tester votre code en ligne en temps réel.

Brève encyclopédie du HTML : https://fr.wikibooks.org/wiki/Le_langage_HTML

Raccourcis sur *Visual Studio Code* :
<li>Formater code = CTR + SHIFT + F</li>
<li>Commenter code = CTR + :</li>

<h2>En-tête (head)</h2>

Contient les infos générales de la page. Le **title** est obligatoire.

Si l'on veut afficher des caractères spéciaux, il faut également importer les normes UTF-8 dans la balise **meta** (= permet de donner des infos sur la page aux serveurs ou aux navigateurs).

    <head>
        <title>Mon 1er projet JavaScript</title>
        <meta charset="UTF-8" />
    </head>

<h2>Corps (body)</h2>

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

La balise **tr** permet de **créer une ligne**. La balise **td** permet de **créer une colonne**. Le code ci-dessous crée 1 ligne contenant 2 colonnes (afficher "Taille" puis éditer la valeur de taille).

L'utilisateur peut entrer du texte ou des valeurs grâce à la balise **input**, qui peut prendre plusieurs types (**text**, **button**...). Elle possède plusieurs paramètres :

<li>Le paramètre <strong>id</strong> permet d'identifer une balise de manière unique.
<li>Le paramètre <strong>placeholder</strong> affiche un message temporaire dans la zone d'entrée de texte.
<li>L'attribut <strong>required</strong> n'est pas nécessaire, on l'utilise pour indiquer si une entrée est obligatoire (encadre la zone d'entrée en rouge).


    <tr>
        <td>
           Taille
        </td>
        <td>
            <input type="text" id="txtTaille" placeholder="Votre taille" required/>
        </td>
    </tr>

Demander le genre de l'utilisateur : on n'utilise pas de **input** d'un type particulier ! On a recours à la balise **select** pour proposer plusieurs options à l'utilisateur. La valeur de ce **select** dépendra du choix de l'utilisateur.

    <tr>
        <td>Genre</td>
        <td>Vous êtes...</td>
        <td>
            <select id="lstGenre">
                <option value="feminin">un garçon</option>
                <option value="masculin">une fille</option>
            </select>
        </td>
    </tr>

<h2>Insérer un bouton</h2>

On souhaite afficher, entre deux séries de lignes, un bouton "Calculer IMC".

Ce bouton exécutera une fonction définie dans les balises **script** ou dans le fichier **sources.js** (voir plus bas) chaque fois qu'il sera cliqué (paramètre **onclick="MaFonction()"**) :

    <input type="button" id="cmdCalculer" onclick="Traitement()" value="Calculer IMC">

Afin d'améliorer l'affichage, les paramètres **colspan="2"** et **align="center"** de la balise **td** nous servent à préciser l'emplacement du bouton par rapport aux colonnes que nous avons créées.

    <tr>
        <td colspan="2" align="center">
            <input type="button" id="cmdCalculer" onclick="MaFonction()" value="Calculer IMC">
        </td>
    </tr>

<h2>Script et fonctions</h2>

La balise **script** permet de créer des variables et des fonctions *propres au fichier* (= on ne peut pas les utiliser depuis un autre fichier .html). On l'ajoute à la toute fin du **body**.

    <script>
        var nb = 12;
    </script>

L'expression **document.getElementById** permet de récupérer un élément de mon fichier pour son **id**.

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
            return p/(t**2);
        }
        
        function Traitement() {
            var poids = document.getElementById("txtPoids").value;
            var taille = document.getElementById("txtTaille").value;
            
            document.getElementById("txtMin").value = 19*(taille**2);
            document.getElementById("txtIMC").value = IMC(poids,taille);
        }
    </script>

JavaScript est capable d'importer des classes et des méthodes pré-enregistrées (par ex. Math). La fonction ci-dessous renvoie une valeur arrondie au centième :

    function arrondi(n) {
        return Math.round(n*100)/100;
    }

<h2>Sources et fichiers JS</h2>

Les fonctions que nous avons créées entre les balises **script** peuvent être stockées dans un fichier JavaScript (= extension **.js**). On peut donc remplacer le contenu de nos balises **script** par :

    <script src="./sources.js"></script>

La norme dit qu'un fichier JS stockant des fonction s'appelle "**sources.js**" Pas besoin de préciser le lien vers ce fichier en haut du fichier HTML.
