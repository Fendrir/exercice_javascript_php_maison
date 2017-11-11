// _______________________ Le tri du tableau de façon croissante ___________________________

function tri(tab) {

    for (var i = 0; i < tab.length; i++) {

        for (var j = i + 1; j < tab.length; j++) {

            if (tab[j] < tab[i]) {

                var tabTri = tab[j];
                tab[j] = tab[i];
                tab[i] = tabTri;

            }

        }

    }

    return tab;

};