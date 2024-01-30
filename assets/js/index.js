// Variables de conteo para saber quien va ganando
var countPlayer = 0;
var countIA = 0;

// Declaracion de variables para selecionar los botones
var array = document.querySelectorAll(".myButton");

// for para encontrar el boton pulsado entre los tres que hay
for(var i = 0; i < array.length; i++){
    array[i].addEventListener("click", function(){
        // genera un numero aleatorio
        var randomNumberIA = Math.floor((Math.random() * 4) + 1);

        // toma de deciones dependiendo de cual boton se pulso o el muero que salio
        switch (this.innerHTML) {
            case "Rock":
                if(randomNumberIA == 1){
                    changeAttribute("./assets/images/rock.png", "./assets/images/rock.png");
                    changeColor("#FBF6EE");
                }
        
                else if(randomNumberIA == 2){
                    changeAttribute("./assets/images/rock.png", "./assets/images/paper.png");
                    countIA++;
                    functionCountIA(countPlayer, countIA);
                }
        
                else if(randomNumberIA == 3){
                    changeAttribute("./assets/images/rock.png", "./assets/images/scissors.png");
                    countPlayer++;
                    functionCountIA(countPlayer, countIA);
                }
                break;
            
            case "Paper":
                if(randomNumberIA == 1){
                    changeAttribute("./assets/images/paper.png", "./assets/images/paper.png");
                    changeColor("#FBF6EE");
                }
        
                else if(randomNumberIA == 2){
                    changeAttribute("./assets/images/paper.png", "./assets/images/scissors.png");
                    countIA++;
                    functionCountIA(countPlayer, countIA);
                }
        
                else if(randomNumberIA == 3){
                    changeAttribute("./assets/images/paper.png", "./assets/images/rock.png");
                    countPlayer++;
                    functionCountIA(countPlayer, countIA);
                }
                break;
            
            case "Scissors":
                if(randomNumberIA == 1){
                    changeAttribute("./assets/images/scissors.png", "./assets/images/scissors.png");
                    changeColor("#FBF6EE");
                }
        
                else if(randomNumberIA == 2){
                    changeAttribute("./assets/images/scissors.png", "./assets/images/rock.png");
                    countIA++;
                    functionCountIA(countPlayer, countIA);
                }
        
                else if(randomNumberIA == 3){
                    changeAttribute("./assets/images/scissors.png", "./assets/images/paper.png");
                    countPlayer++;
                    functionCountIA(countPlayer, countIA);
                }
                break;
        
            default: console.log("end");
                break;
        } 
    });
}


function changeAttribute(player, IA){
    document.getElementById("player").setAttribute("src", player);
    document.getElementById("IA").setAttribute("src", IA);
}
    

function functionCountIA(valuePlayer, valueIA){
    document.getElementById("countIA").innerHTML = "Player IA: " + valueIA;
    document.getElementById("countPlayer").innerHTML = "Player: " + valuePlayer;
    changeColor("black");
}

function changeColor(color){
    element = document.getElementsByTagName("h2");
    for(var i = 0; i < element.length; i++){
        element[i].style.color = color;
    }
}
