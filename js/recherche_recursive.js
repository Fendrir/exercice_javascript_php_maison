    // ________________________ Recherche recursive dichotomique ______________________________


    var min = 0;
    var max = tab.length;


    function rechercheRecursive(tab, min, max, rechercheUt) {

        var mediane = parseInt((max - min) / 2) + min;

        if (!max - min >= 2) {

            return "la recherche n'a pas abouti lel" + false;

        } else if (rechercheUt === tab[mediane]) {

            return "la postion de votre recherche est ici : " + (mediane + 1);

        } else if (rechercheUt > tab[mediane]) {

            return rechercheRecursive(tab, mediane, max, rechercheUt);

        } else {

            return rechercheRecursive(tab, min, mediane, rechercheUt);

        }

    }

    //_______________________________ Fonction de la recherche formulaire utilisateur recursive __________________________________

    // searchRecurseUser => input recherche utilisateur formulaire
    // validerSearchRecurseUser => bouton validation formulaire utilisateur

    $("#validerSearchRecurseUser").on("click", function () {

        var rechercheUt = parseInt($("#searchRecurseUser").val());

        $("#reponse_recursive").prepend("<p>" + rechercheRecursive(tri(tab), min, max, rechercheUt) + "</p>");
    });