var prixHT = prompt("Entrez le prix HT :");

var tauxTVA = prompt("Entrez le taux de TVA en pourcentage :");

var prixTTC = prixHT * (1 + tauxTVA / 100);

if(prixTTC > 100){
document.write("<p style='color: red'>Le prix TTC est : " + prixTTC.toFixed(2) + " €</p>")
};
if(prixTTC < 100){
document.write("<p style='color: green'>Le prix TTC est : " + prixTTC.toFixed(2) + " €</p>")
};