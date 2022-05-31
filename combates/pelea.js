
let trueDamage
let enemyTrueDamage
let turno = 0

//Dado de 6 caras.
function TirarDados() {
    
    return Math.round(Math.random()*6)
   }


    

//se decide el ataque verdadero sumando el ataque + tirada de dados - defensa del oponente y se da el combate hasta que la vida de uno llegue a cero.
export function pelea(statsPropias,statsEnemigo){
       do{
      
         trueDamage = TirarDados()+statsPropias.ataque-statsEnemigo.defensa
           
           enemyTrueDamage = TirarDados()+statsEnemigo.ataque-statsPropias.defensa
          
           if(trueDamage>enemyTrueDamage){
            statsEnemigo.vida-=trueDamage
           }
           else if(enemyTrueDamage>trueDamage){
               statsPropias.vida-=enemyTrueDamage
           }
           turno++
           alert("Turno "+(turno))
            
           console.log(`Vida  ${statsPropias.vida}`)
           console.log(`Vida del enemigo  ${statsEnemigo.vida}`)
        
           }
        
           while(statsPropias.vida >0 && statsEnemigo.vida > 0)
           //se decide que pasa cuado la vida de alguno llega a cero
           if(statsPropias.vida<=0){
               alert("Haz muerto")
               alert("GAME OVER");
               Deno.exit(1)
               }
               else{
                   alert("Haz derrotado a tu enemigo")
                  turno = 0
               }
               
        }
       
      