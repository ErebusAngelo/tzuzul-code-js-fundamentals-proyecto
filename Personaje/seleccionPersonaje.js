let clase = ""
let respuestados;
let condition = true
 export const stats = {vida: 0, ataque: 0, defensa: 0}

export function character(){
    do {
        
    console.log("%c Humano[300 vida, 14 ataque, 12 defensa]","color: blue;")
    console.log("%c Elfo  [250 vida, 16 ataque,  8 defensa]","color: red")
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