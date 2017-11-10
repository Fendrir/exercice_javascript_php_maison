//_______________________ Creation d'une recherche dicotomique non récursive ______________________________

function rechercheDicotomique(tab,rechercheUt){
    
    var min = 0;
    var max = tab.length;
    var trouver = false;

    var valMediane;
    
    while (!trouver && (max-min>=2)) {

        valMediane = parseInt((max-min)/2)+min; // Création de l'indice de la mediane du tableau

        if (tab[valMediane]===rechercheUt) {
                                                    // Verification d'égalité
            trouver = true;

        }else if (tab[valMediane]>rechercheUt){

            max = valMediane;                     // Positionnement sur l'intervalle inférieur
            
        }else{
            
            min = valMediane;                     // Positionnement sur l'intervalle supérieur

        }
        
    }

    return trouver?"le numéro se trouve à la position : "+(valMediane+1):"Le numéro n'est pas dans le tableau";     // retour de la position si trouvé sinon message d'erreur


}

// console.log(rechercheDicotomique(tri(tab),845));

    //_______________________________ Fonction de la recherche formulaire utilisateur non recursive __________________________________

    // searchRecurseUser => input recherche utilisateur formulaire
    // validerSearchRecurseUser => bouto, validation formulaire utilisateur

    $("#validerSearchNonRecurseUser").on("click",function(){
        
                var rechercheUt = parseInt($("#searchNonRecurseUser").val());
                console.log(rechercheUt);
        
                $("#reponse_non_recursive").prepend("<p>"+rechercheDicotomique(tri(tab),rechercheUt)+"</p>");
            });