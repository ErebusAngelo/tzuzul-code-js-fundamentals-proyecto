function colorInventario(){
    for (let i = 0; i < inventario.length; i++) {
    
        color=" " + inventario;
         
      }
      
      console.log(`%cinventario:${color}`,`color: orange;`)
}





       
function invLleno(){
    
    if(inventario.length>2){
        do {
         full = prompt(`tu inventario esta lleno, tienes ${inventario}, debes dejar uno para poder continuar[elige 1, 2 o 3]`)
         
          if(full != "1" && full != "2" && full != "3" ) {
              alert ("no te estoy entendiendo forastero")
          }
        else{ dejarElemento=inventario.splice(full-1,1)
            alert(`te has quedado con ${inventario}`)
        
        }
        elemento = dejarElemento.toString()
      
        }
         

         while (inventario.length>2);
   
    }
}
function descontarElemento (){
        switch (elemento) {
             case "espada+3 Atk":
                 stats.ataque-=3
                  break;
             case "anillo+20 Vida":
                 stats.vida-=20
                  break;    
             case "escudo+3 Def":
             case "casco+3 Def":
                 stats.defensa-=3
                  break;  
            case "collar+4 Atk":
            case "espada+4 Atk":
                 stats.ataque-=4
                 break;

            case "espada+6 Atk":
                stats.ataque-=6
                break;
                
                  default:
                  break;
            }
             }

        

function fullInv(){
     if (inventario.length>2){
    invLleno()
   descontarElemento()
    }
    colorInventario()
    console.log(stats)
}