function nParite(n, parite) {
  somme = 0
  switch (parite ){
    case true : 
      for ( let i = 0; i < n*2; i += 2) {
         somme = somme + i 
      }
       break ;
    case false :
      for ( let i = 1; i < n*2; i = i + 2){
      somme = somme + i 
   }
  }    
  return somme 
}



module.exports = nParite;