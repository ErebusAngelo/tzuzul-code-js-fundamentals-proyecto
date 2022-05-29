let color = ""
let clase = ""
let respuesta; 
let respuestados;
let condition = true
let trueDamage
let enemyTrueDamage
let dejarElemento
let elemento
let full;
const inventario = []
const stats = {vida: 0, ataque: 0, defensa: 0}
const enemyStatsOne= {vida: 150, ataque: 14, defensa:10}
const enemyStatsTwo= {vida: 200, ataque: 16, defensa: 12}
const bossStats = {vida: 250, ataque: 18, defensa: 14}

function colorInventario(){
    for (let i = 0; i < inventario.length; i++) {
    
        color+=" " + inventario[i];
         
      }
      
      console.log(`%cinventario:${color}`,`color: orange;`)
}

function TirarDados() {
    
    return Math.round(Math.random()*6)
   }


function turnos (miDaño,dañoEnemigo,numeroDeEnemigo){
    if(miDaño>dañoEnemigo){
        numeroDeEnemigo.vida-=miDaño
    }
    else if(dañoEnemigo>miDaño){
        stats.vida-=dañoEnemigo
    }
    console.log(`Vida  ${stats.vida}`)
    console.log(`Vida del enemigo  ${numeroDeEnemigo.vida}`)
}

    
 

 function finPelea(){
    if(stats.vida<=0){
        alert("Haz muerto")
        alert("GAME OVER");
        Deno.exit(1)
        }
        else{
            alert("Haz derrotado a tu enemigo")
           
        }
 }


function pelea(enemyStats){
       do{
   
         trueDamage = TirarDados()+stats.ataque-enemyStats.defensa
           
           enemyTrueDamage = TirarDados()+enemyStats.ataque-stats.defensa
          
          turnos(trueDamage,enemyTrueDamage,enemyStats)
           }
           while(stats.vida >0 && enemyStats.vida > 0)
        finPelea()
        }
       
function invLleno(){
    
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
    console.log(`inventario${inventario}`)
    console.log(stats)
}


function login(){
    console.log("%c        EL CASTILLO INCONSCIENTE         ","color: #6c1d62; font-style: italic; font-weight: bold;")
    console.log("%c        ['_]               [_']            ", "color: #ff0000;")
    console.log("%c           |               |            ","color: #562a0d")
    console.log("%c           []             []             ","color: orange;")              
    console.log("%c          (())           (())           ","color: orange")
    console.log("%c         ((()))         ((()))          ","color: orange")
    console.log("%c        (((())))       (((())))         ","color: orange")
    console.log("%c        |^|^^|^|_______|^|^^|^|         ","color: orange")
    console.log("%c    []   |^^^^|-_-_-_-_-|^^^^|   []     ","color: orange")
    console.log("%c   (())  | || |+_+_+_+_+| || |  (())    ","color: orange")
    console.log("%c  ((())) |    |[X]_+_[X]|    | ((()))   ","color: orange")
    console.log("%c (((())))|    |+_+_+_+_+|    |(((())))  ","color: orange")
    console.log("%c |^|^^|^||____|-_-_-_-_-|____||^|^^|^|  ","color: orange")
    console.log("%c  |^^^^|_-_-_-_-_-_-_-_-_-_-_-_|^^^^|   ","color: orange")
    console.log("%c  | || |_-_-_-_-_-_-_-_-_-_-_-_| || |   ","color: orange")
    console.log("%c  |    |_+_+_+_+_+_+_+_+_+_+_+_|    |   ","color: orange")
    console.log("%c  |    |_+[X]+_[X]_+_[X]_+[X]+_|    |   ","color: orange")
    console.log("%c  |    |_+_+_+_+_+___+_+_+_+_+_|    |   ","color: orange")
    console.log("%c  |    |_-_-_-_-_|:::|_-_-_-_-_|    |   ","color: orange")
    console.log("%c  |____|_+_+_+_+_|:::|_+_+_+_+_|____|   ","color: orange")
   
          
      
 alert("Presiona [Enter] para comenzar a jugar")
    
 do {
   let userName = prompt("No reconozco tu rostro, no eres de por aqui cierto? Dime, Cual es tu nombre?")

    respuesta = prompt(`${userName}? ese es realmente tu nombre?[responde "si" o "no"]`).toLowerCase()
                   
    switch (respuesta) {
        case "si":
            alert(`${userName}, que nombre peculiar, se nota que eres un forastero`)
            condition =false
            break;
        case "no":
            userName = alert("No tengo tiempo para juegos")
            break;
        default:
            respuesta = prompt("No te estoy entendiendo forastero")
            break;
    }
} while (condition);
}

function character(){
do {
    
console.log("%c Humano[300 vida, 14 ataque, 12 defensa]","color: blue;")
console.log("%c Elfo  [250 vida, 18 ataque,  7 defensa]","color: red")
console.log("%c Enano [350 vida, 10 ataque, 14 defensa]","color:grey")
 respuestados = prompt("tu aspecto tambien es muy peculiar, no reconozco tu raza, que se supone que eres?Elige [1.Humano 2.Elfo 3.Enano]")
                    .toLowerCase()
                    .trim()
    switch (respuestados) {
        case "1":
            clase = "Humano"
            stats.vida= 300
            stats.ataque= 14
            stats.defensa= 12
            alert(`Un ${clase}! jamas habia visto uno por aqui`)
            condition =false
            break;
        case "2":
            clase = "Elfo"
            stats.vida = 250
            stats.ataque = 16
            stats.defensa = 8
            alert(`Un ${clase}! jamas habia visto uno por aqui`)
            
            condition =false
            break;
        case "3":
            clase = "Enano"
            stats.vida= 350
            stats.ataque = 10
            stats.defensa = 14
            alert(`Un ${clase}! jamas habia visto uno por aqui`)
            condition =false
            break;
        default:
           alert("No te estoy entendiendo forastero")
            condition =true
            break;
    }
} while (condition);
console.log(clase)
console.log(stats)
}


function primerLugar(){
 alert (`Fue un gusto charlar contigo  ${clase}, pero es momento de dejarte solo con tu destino`)
     alert ("Te encuentras repentinamente dentro de un castillo de aspecto lugubre, tu interlocutor ha desaparecido, hay una antigua y enorme puerta detras tuyo y frente a ti hay otras 3.") 
     do {  
    respuesta = prompt("Toma una decision[1.Puerta Trasera 2.Puerta izquierda 3.Puerta central 4.Puerta derecha]")
                   
    switch (respuesta) {
        case "1":
            alert("Intentas abrir la puerta pero por mas que lo intentas esta sigue bloqueada")
            condition =true
            break;
        case "2":
            alert("Entras a una sala con una letrina en la que ecuentras una espada")
            stats.ataque += 3
            inventario.push("espada+3 Atk")
            colorInventario()
            console.log(stats)
            condition =false

            break;
        case "3":
            alert("Entras a una vieja armeria, todo parece estropeado menos un escudo de madera que aun tiene utilidad")
            stats.defensa += 3
            inventario.push("escudo+3 Def")
             colorInventario()
             console.log(stats)
             condition =false

             break;

        case "4":
           alert("Te encuentras en una habitacion con un cofre, lo abres y resulta ser una trampa que explota hiriendote. pierdes 50 puntos de vida")
           stats.vida-=50
           console.log(stats)

           condition =false

           
           break;
           
        default:
            respuesta = prompt("No te estoy entendiendo forastero")
            condition = true
            break;

    }
    
} while (condition);
}


function segundoLugar(){
alert("Te reincorporas y miras a tu alrededor, notas que nuevamente estas frente a 3 puertas")
do {  
    respuesta = prompt("Toma una decision[1.Puerta izquierda 2.Puerta central 3.Puerta derecha]")

switch (respuesta) {
case "1":
alert("Entras una habitacion aparentemente vacia pero notas algo en el suelo, es un anillo")
inventario.push("Anillo+20 Vida")
stats.vida+=20

colorInventario()
console.log(stats)

condition =false

break;
case "2":
alert("ves el cuerpo de un caballero muerto, su casco esta en buen estado, podria serte util")
stats.defensa+=3
inventario.push("casco+3 Def")
colorInventario()
console.log(stats)

condition =false

break;
 case "3":
    alert("Entras en una habitacion oscura y alguien te ataca por sorpresa, te vez obligado a pelear")
    pelea(enemyStatsOne)
    alert("Al derrotar a tu enemigo logras adquirir su espada")
    inventario.push ("espada+4 atk")
    stats.ataque+=4
    colorInventario()
    console.log(stats)

     condition =false
     break;
default:
respuesta = prompt("No te estoy entendiendo forastero")
condition = true
break;
}

} while (condition);
}

function tercerlugar(){
alert("Empiezas a perder un poco de compostura al ver 3 puertas mas adelante, te preguntas si es un sueño o un chiste de mal gusto, pero debes continuar")
do { 
respuesta = prompt("Toma una decision[1.Puerta izquierda 2.Puerta central 3.Puerta derecha]")

switch (respuesta) {
case "1":
alert("al ingresar ves un orco con cara de pocos amigos, intentas comunicarte con el pero se abalanza sobre ti y te ataca")
pelea(enemyStatsTwo)
alert("al derrotar a tu oponente te quedas con su espada")
inventario.push ("espada+6 Atk")
stats.ataque += 6
colorInventario()
console.log(stats)

condition =false
break;
case "2":
alert("Al tocar el pomo de la puerta, comienzas a sentir que te arde la mano, esta esta imbuida con magia, tu mano queda lastimada, pierdes vida y tambien queda lastimada por lo que pierdes ataque")
stats.vida-=30
stats.ataque-=2


condition =true

break;
 case "3":
    alert("En la habitacion, encuentras una pequeña mesa y sobre ella un collar")
    inventario.push("collar+4 Atk")
    
    stats.ataque+=4
    colorInventario()
    console.log(stats)

     condition =false
     break;
default:
respuesta = prompt("No te estoy entendiendo forastero")
condition = true
break;
}
fullInv()
} while (condition);
}
function final(){
    alert("Te das cuenta que frente a ti hay una unica gran puerta adornada con detalles dorados,las demas puertas desaparecieron, tu unica opcion es pasar por alli")
    alert("Al ingresar ves un trono y un viejo esqueleto con armadura que desacansa en el, con una maza en su mano izquierda")
    alert("Te dispones a investigar la sala pero escuchas un sonido, el esqueleto se levanta del trono y se ve dispuesto a atacarte")
    
    pelea(bossStats)
    console.log(stats)
}
 function epilogo(){
      alert("blandes tu espada hacia el cuello del esqueleto, separando su cabeza de su cuerpo, cierras los ojos para intentar respirar un poco de tranquilidad")
    alert("Comienzas a oir un sonido extraño y repetitivo, abres los ojos y te despiertas en tu cama, te das media vuelta y apagas el despertador para dormir un poco mas")
    alert("FELICIDADES!")
    alert("HAZ TERMINADO EL JUEGO")
    console.log("creado por Gabriel Alejandro D'Angelo")
    console.log("%c.___________. __    __   _______     _______ .__   __.  _______  ","color:red")
    console.log("%c|           ||  |  |  | |   ____|   |   ____||  | /  | |       | ","color:red")
    console.log("%c`---|  |----`|  |__|  | |  |__      |  |__   |  |/   | |  .--.  |","color:red")
    console.log("%c    |  |     |   __   | |   __|     |   __|  |    .  | |  |  |  |","color:red")
    console.log("%c    |  |     |  |  |  | |  |____    |  |____ |   /|  | |  '--'  |","color:red")
    console.log("%c    |__|     |__|  |__| |_______|   |_______||__/ |__| |_______/ ","color:red")
 }
function juego(){
login ()
character()
primerLugar()
segundoLugar()
tercerlugar()
final()
}


 juego()

