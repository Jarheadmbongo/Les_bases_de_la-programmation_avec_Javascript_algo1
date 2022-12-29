function multiple_3_5(n) {
  // corps de la fonction ici
  somme = 0
  
  for (let i = 0; i < n ; i++){
    if (i % 3 === 0 || i % 5 === 0)
    somme = somme + i
  }
  return somme;
  
}

module.exports = multiple_3_5;