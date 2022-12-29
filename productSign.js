function productSign(n, m) {
  // corps de la fonction ici
  produit=n*m
  
  if (produit > 0) {
    return  1;
  }
  else if (produit < 0){
     return  -1;
  }
  else  {
    return 0 ;
  }
   
}

module.exports = productSign;

