import {pelea} from "./combates/pelea.js";
import {invLleno,colorInventario,pushitem,descontarElemento} from "./inventario/inventario.js";
import {Incio,login} from "./Login/Menulogin.js";
import {character} from "./Personaje/seleccionPersonaje.js";

let respuesta; 
let condition = true

const stats = {vida: 0, ataque: 0, defensa: 0}
const enemyStatsOne= {vida: 150, ataque: 14, defensa:10}
const enemyStatsTwo= {vida: 200, ataque: 16, defensa: 12}
const bossStats = {vida: 250, ataque: 18, defensa: 14}



function primerLugar(){
 alert (`Fue un gusto charlar contigo, pero es momento de dejarte solo con tu destino`)
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
            pushitem("espada+3 Atk")
            colorInventario()
            console.log(stats)
            condition =false

            break;
        case "3":
            alert("Entras a una vieja armeria, todo parece estropeado menos un escudo de madera que aun tiene utilidad")
            stats.defensa += 3
            pushitem("escudo+3 Def")
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
pushitem("Anillo+20 Vida")
stats.vida+=20

colorInventario()
console.log(stats)

condition =false

break;
case "2":
alert("ves el cuerpo de un caballero muerto, su casco esta en buen estado, podria serte util")
stats.defensa+=3
pushitem("casco+3 Def")
colorInventario()
console.log(stats)
 
condition =false

break;
 case "3":
    alert("Entras en una habitacion oscura y alguien te ataca por sorpresa, te vez obligado a pelear")
    pelea(stats,enemyStatsOne)
    alert("Al derrotar a tu enemigo logras adquirir su espada")
    pushitem("espada+4 atk")
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
pelea(stats,enemyStatsTwo)
alert("al derrotar a tu oponente te quedas con su espada")
pushitem("espada+6 Atk")
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
    pushitem("collar+4 Atk")
    
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
invLleno()
descontarElemento(stats)
console.log(stats)

} while (condition);

}

function final(){
    alert("Te das cuenta que frente a ti hay una unica gran puerta adornada con detalles dorados,las demas puertas desaparecieron, tu unica opcion es pasar por alli")
    alert("Al ingresar ves un trono y un viejo esqueleto con armadura que desacansa en el, con una maza en su mano izquierda")
    alert("Te dispones a investigar la sala pero escuchas un sonido, el esqueleto se levanta del trono y se ve dispuesto a atacarte")
    
    pelea(stats,bossStats)
    console.log(stats)
    //epilogo
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
Incio()
login ()
character(stats)
primerLugar()
segundoLugar()
tercerlugar()
final()
}

juego()

 
