let guardian;

function gameOver(){
    let menu = prompt("Haz muerto, deseas reiniciar el juego[1.Si 2.No]")
    switch (menu) {
        case "1":
            return false;
        case "2":
            Deno.exit(1)    
    
        default:
            alert("No te entiendo")
            return true
            
    }
}
do {
    guardian=gameOver()
} while (guardian);
