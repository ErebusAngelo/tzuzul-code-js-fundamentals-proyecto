const enemystatsOne= {vida: 150, ataque: 14, defensa:10}
const misStats = {vida: 150, ataque: 14, defensa: 10}

//Dado de 6 caras.
function TirarDados() {
    
    return Math.round(Math.random()*6)
   }


    if(trueDamage>enemyTrueDamage){
        numeroDeEnemigo.vida-=trueDamage
    }
    else if(enemyTrueDamage>trueDamage){
        statsPropias.vida-=enemyTrueDamage
    }
    console.log(`Vida  ${statsPropias.vida}`)
    console.log(`Vida del enemigo  ${numeroDeEnemigo.vida}`)


    
 
//Elige como continuar dependiendo si perdiste o ganaste la pelea
 function finPelea(){
    if(statsPropias.vida<=0){
        alert("Haz muerto")
        alert("GAME OVER");
        Deno.exit(1)
        }
        else{
            alert("Haz derrotado a tu enemigo")
           
        }
 }


function pelea(statsPropias,statsEnemigo){
       do{
   
         trueDamage = TirarDados()+statsPropias.ataque-statsEnemigo.defensa
           
           enemyTrueDamage = TirarDados()+statsEnemigo.ataque-statsPropias.defensa
          
           if(trueDamage>enemyTrueDamage){
            statsEnemigo.vida-=trueDamage
           }
           else if(enemyTrueDamage>trueDamage){
               statsPropias.vida-=enemyTrueDamage
           }
           console.log(`Vida  ${statsPropias.vida}`)
           console.log(`Vida del enemigo  ${statsEnemigo.vida}`)
         
           }
           while(statsPropias.vida >0 && statsEnemigo.vida > 0)
           finPelea()
        }
pelea(misStats,enemystatsOne)

