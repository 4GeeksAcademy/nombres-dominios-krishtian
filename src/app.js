let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.us', '.io'];


function generadordominios() {
  for (let a = 0; a < pronoun.length; a++){
    for (let b = 0; b < adj.length; b++){
      for (let c = 0; c < noun.length; c++){
        for (let d = 0; d < ext.length; d++){

          console.log(`${pronoun[a]} ${adj[b]} ${noun[c]} ${ext[d]}`)
        } 
      }
    }
  }
}        
generadordominios()

// Aqui utilizamos los "HACK"

let pronoun2 = ['the', 'our'];
let adj2 = ['great', 'big'];
let noun2 = ['inter', 'rabi'];
let ext2 = ['.com', '.net','.com','.net'];


function generadordominios2() {
  for (let e = 0; e < pronoun.length; e++){
    for (let f = 0; f < adj.length; f++){
      for (let g = 0; g < noun.length; g++){
        for (let h = 0; h < ext.length; h++){

          console.log(`${pronoun2[e]} ${adj2[f]} ${noun2[g]} ${ext2[h]}`)
        } 
      }
    }
  }
}        
generadordominios2()





