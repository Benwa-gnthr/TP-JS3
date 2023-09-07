    var prixHT = prompt("Entrez le prix HT :");

    var tauxTVA = prompt("Entrez le taux de TVA en pourcentage :");

    var prixTTC = prixHT * (1 + tauxTVA / 100);

    document.write("<p>Le prix TTC est : " + prixTTC.toFixed(2) + " €</p>");