document.addEventListener("DOMContentLoaded", function() {
    var world = [
        [2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,2,1,1,2,2,1,1,2],
        [2,1,2,2,1,2,1,1,1,2],
        [2,1,1,2,1,1,1,1,1,2],
        [2,1,1,2,5,1,2,1,1,2],
        [2,1,1,2,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2]
        
    ];
    var score = 0;
    var pacman = { x: 1, y: 1, degree: 0 };
    var ghost = { x: 7, y: 5 };

    function displayWorld() {
        var output = "";
    
        for(var i = 0; i < world.length; i++) {
            output += "\n<div class='row'>\n";
            for(var j = 0; j < world.length; j++) {
                if(world[i][j] == 5)
                    output += "<div class='cherry'></div>";
                if(world[i][j] == 2)
                    output += "<div class='brick'></div>";
                if(world[i][j] == 1)
                    output += "<div class='coin'></div>";
                if(world[i][j] == 0)
                    output += "<div class='empty'></div>";
            }
            output += "\n</div>";
        }
        //console.log(output);
        document.getElementById('world').innerHTML = output;
        return "Holy SHit!!"
    }
    function displayPacman(){
        document.getElementById('pacman').style.top = pacman.y*20+"px";
        document.getElementById('pacman').style.left = pacman.x*20+"px";
        document.getElementById('pacman').style.transform = "rotate("+pacman.degree+"deg)"
    }
    function displayGhost(){
        document.getElementById('ghost').style.top  = ghost.y*20+"px";
        document.getElementById('ghost').style.left = ghost.x*20+"px";
    }
    function displayScore(){
        document.getElementById('score').innerHTML = score;
    }
    
    displayWorld();
    displayPacman();
    displayGhost();
    displayScore();
    
    document.onkeydown = function(e){
        if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
            pacman.x--;
            pacman.degree = 180;
        }
        else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
            pacman.x++;
            pacman.degree = 0;
        }
        else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
            pacman.y--;
            pacman.degree = 270;
        }
        else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
            pacman.y++;
            pacman.degree = 90;
        }
    
        if(world[pacman.y][pacman.x] == 1 || world[pacman.y][pacman.x] == 5){
            score += 10 * world[pacman.y][pacman.x];
            world[pacman.y][pacman.x] = 0;
            displayWorld();
            displayScore();
        }
    
        //console.log(e.keyCode);
        displayPacman();
    
        if(pacman.x == ghost.x && pacman.y == ghost.y) {
            alert("Game Over!")
        }
    }
})