    // Demander un prix HT à l'utilisateur en utilisant prompt()
    var prixHT = prompt("Entrez le prix HT :");

    // Calculer le prix TTC en ajoutant la TVA de 20%
    var prixTTC = parseFloat(prixHT) * 1.20;

    // Insérer le prix TTC dans la page HTML
    document.write("Le prix TTC est : " + prixTTC.toFixed(2) + " €");   