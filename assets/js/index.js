document.addEventListener("DOMContentLoaded", function() {
    var countPlayer = 0;
    var countIA = 0;
    
    function changeColor(color){
        element = document.getElementsByTagName("h2");
        for(var i = 0; i < element.length; i++){
            element[i].style.color = color;
        }
    }
    
    document.getElementById("myButton1").addEventListener("click", function(){
        var randomNumberIA = Math.floor((Math.random() * 4) + 1);

        document.getElementById("player").setAttribute("src", "./assets/images/rock.png");
        
        if(randomNumberIA == 1){
            document.getElementById("IA").setAttribute("src", "./assets/images/rock.png");
            changeColor("#FBF6EE");
        }
        else if(randomNumberIA == 2){
            document.getElementById("IA").setAttribute("src", "./assets/images/paper.png");
            countIA++;
            document.getElementById("countIA").innerHTML = "Player IA: " + countIA;
            changeColor("#000");
        }
        else if(randomNumberIA == 3){
            document.getElementById("IA").setAttribute("src", "./assets/images/scissors.png");
            countPlayer++;
            document.getElementById("countPlayer").innerHTML = "Player: " + countPlayer;
            changeColor("#000");
        }
    });


    document.getElementById("myButton2").addEventListener("click", function(){
        var randomNumberIA = Math.floor((Math.random() * 4) + 1);

        document.getElementById("player").setAttribute("src", "./assets/images/paper.png");
        
        if(randomNumberIA == 1){
            document.getElementById("IA").setAttribute("src", "./assets/images/paper.png");
            changeColor("#FBF6EE");
        }
        else if(randomNumberIA == 2){
            document.getElementById("IA").setAttribute("src", "./assets/images/scissors.png");
            countIA++;
            document.getElementById("countIA").innerHTML = "Player IA: " + countIA;
            changeColor("#000");
        }
        else if(randomNumberIA == 3){
            document.getElementById("IA").setAttribute("src", "./assets/images/rock.png");
            countPlayer++;
            document.getElementById("countPlayer").innerHTML = "Player: " + countPlayer;
            changeColor("#000");
        }
    });


    document.getElementById("myButton3").addEventListener("click", function(){
        var randomNumberIA = Math.floor((Math.random() * 4) + 1);

        document.getElementById("player").setAttribute("src", "./assets/images/scissors.png");
        
        if(randomNumberIA == 1){
            document.getElementById("IA").setAttribute("src", "./assets/images/scissors.png");
            changeColor("#FBF6EE");
        }
        else if(randomNumberIA == 2){
            document.getElementById("IA").setAttribute("src", "./assets/images/rock.png");
            countIA++;
            document.getElementById("countIA").innerHTML = "Player IA: " + countIA;
            changeColor("#000");
        }
        else if(randomNumberIA == 3){
            document.getElementById("IA").setAttribute("src", "./assets/images/paper.png");
            countPlayer++;
            document.getElementById("countPlayer").innerHTML = "Player: " + countPlayer;
            changeColor("#000");
        }
    });
});
