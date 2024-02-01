document.addEventListener('DOMContentLoaded', function() {
    // Código que se ejecutará cuando el DOM esté completamente cargado

    // Variables de conteo para saber quien va ganando
    var countPlayer = 0;
    var countComp = 0;

    // Declaracion de variables para selecionar los botones
    var array = document.querySelectorAll(".myButton");

    // for para encontrar el boton pulsado entre los tres que hay
    for(var i = 0; i < array.length; i++){
        array[i].addEventListener("click", function(){
            // genera un numero aleatorio
            var randomNumberComp = Math.floor((Math.random() * 4) + 1);

            // toma de deciones dependiendo de cual boton se pulso o el muero que salio
            switch (this.innerHTML) {
                case "Rock":
                    if(randomNumberComp == 1){
                        changeAttribute("./assets/images/rock.png", "./assets/images/rock.png");
                        functionCount(countPlayer, countComp,  1, "#FBF6EE");
                    }
            
                    else if(randomNumberComp == 2){
                        changeAttribute("./assets/images/rock.png", "./assets/images/paper.png");
                        countComp++;
                        functionCount(countPlayer, countComp, 2, "black");
                    }
            
                    else if(randomNumberComp == 3){
                        changeAttribute("./assets/images/rock.png", "./assets/images/scissors.png");
                        countPlayer++;
                        functionCount(countPlayer, countComp, 3, "black");
                    }
                    break;
                
                case "Paper":
                    if(randomNumberComp == 1){
                        changeAttribute("./assets/images/paper.png", "./assets/images/paper.png");
                        functionCount(countPlayer, countComp, 1, "#FBF6EE");
                    }
            
                    else if(randomNumberComp == 2){
                        changeAttribute("./assets/images/paper.png", "./assets/images/scissors.png");
                        countComp++;
                        functionCount(countPlayer, countComp, 2, "black");
                    }
            
                    else if(randomNumberComp == 3){
                        changeAttribute("./assets/images/paper.png", "./assets/images/rock.png");
                        countPlayer++;
                        functionCount(countPlayer, countComp, 3, "black");
                    }
                    break;
                
                case "Scissors":
                    if(randomNumberComp == 1){
                        changeAttribute("./assets/images/scissors.png", "./assets/images/scissors.png");
                        functionCount(countPlayer, countComp, 1, "#FBF6EE");
                    }
            
                    else if(randomNumberComp == 2){
                        changeAttribute("./assets/images/scissors.png", "./assets/images/rock.png");
                        countComp++;
                        functionCount(countPlayer, countComp, 2, "black");
                    }
            
                    else if(randomNumberComp == 3){
                        changeAttribute("./assets/images/scissors.png", "./assets/images/paper.png");
                        countPlayer++;
                        functionCount(countPlayer, countComp, 3, "black");
                    }
                    break;
            
                default: console.log("end");
                    break;
            } 
        });
    }


    function changeAttribute(player, playerComp){
        document.getElementById("player").setAttribute("src", player);
        document.getElementById("comp").setAttribute("src", playerComp);
    }
        

    function functionCount(valuePlayer, valueComp, decision, color){
    	changeColor(color);
        document.getElementById("countComp").innerHTML = "Comp: " + valueComp;
        document.getElementById("countPlayer").innerHTML = "Player: " + valuePlayer;
        if(decision == 1){
             document.getElementById("decision").innerHTML = "Draw";
         }
        else if(decision == 2){
             document.getElementById("decision").innerHTML = "Comp wins";
         }
         else{
         	document.getElementById("decision").innerHTML = "Player wins";
         }
    }

    function changeColor(color){
        element = document.getElementsByTagName("h2");
        for(var i = 0; i < element.length; i++){
            element[i].style.color = color;
        }
    }
});
