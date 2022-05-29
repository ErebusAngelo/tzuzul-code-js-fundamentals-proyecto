let respuesta; 
let condition = true

 function Incio(){
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
}

 function login() {
    let userName = prompt("No reconozco tu rostro, no eres de por aqui cierto? Dime, Cual es tu nombre?")
 do {
   
 
     respuesta = prompt(`${userName}? ese es realmente tu nombre?[responde "si" o "no"]`).toLowerCase()
      tag:              
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
             break tag;
     }
 } while (condition);
}

export{Incio,login}