var map = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
window.onload = function() {
    var puzzle = document.getElementById("puzzle");
    for(var i = 0;i < 16;i++) {
        var block = document.createElement("div");
        block.id = "chip" + i;
        block.className="chip";
        block.addEventListener("click",moveEvent)
        puzzle.appendChild(block);
    }
    button = document.getElementById("button"); 
    button.addEventListener("click",start);
}


function start() {
    for(var i = 0;i < 16;i++) {
        var temp1 = parseInt(Math.random()*100%16);
        var temp2 = parseInt(Math.random()*100%16);
        var tmp = map[temp1];
        map[temp1] = map[temp2];
        map[temp2] = tmp;
    }
    if(map[15] == 15) {
        map[15] = 0;
        map[0] = 15;
    }
    var j;
    for(j = 0;map[j] != 15 ;j++) {}
    while((map[15] + j)%2 != 1) {
        var temp1 = parseInt(Math.random()*100%15);
        var tmp = map[temp1];
        map[temp1] = map[j];
        map[j] = tmp;
        j = temp1;
    }
    swap();    
}


function swap() {
    var puzzle = document.getElementById("puzzle");
    for(var i = puzzle.childNodes.length-1;i >= 0;i--) {
        puzzle.removeChild(puzzle.childNodes[i]);
    }
    for(var i = 0;i < 16;i++) {
        var j;
        for(j = 0;map[j] != i;j++) {}
        var block = document.createElement("div");
        block.id = "chip" + j;
        block.className="chip";
        block.addEventListener("click",moveEvent)
        puzzle.appendChild(block);
    }  
}

function checkWin() {
    var count = 0;
    for(var k = 0;k < 16;k++) {
        if(k == map[k]) {
            count++;
        }
    }
    if(count == 16) {
        alert("You win!");
    }
}

var chips = document.getElementsByClassName("chip");
function moveEvent(event) {
    for(var i = 0;i < 16;i++) {
        if(event.currentTarget == chips[i]) {
            if(i+1 == map[15]) {
                var j
                for(j = 0;map[j] != i;j++) {
                }
                var temp = map[15];
                map[15] = map[j];
                map[j] = temp;
                swap();
                checkWin();
                break;
            }
            else if(i-1 == map[15]) {
                var j
                for(j = 0;map[j] != i;j++) {
                }
                var temp = map[15];
                map[15] = map[j];
                map[j] = temp;
                swap();
                checkWin();
                break;
            }
            else if(i <12 && i+4 == map[15]) {
                var j
                for(j = 0;map[j] != i;j++) {
                }
                var temp = map[15];
                map[15] = map[j];
                map[j] = temp;
                swap();
                checkWin();
                break;
            }
            else if(i > 3 && i-4 == map[15]) {
                var j
                for(j = 0;map[j] != i;j++) {              
                }
                var temp = map[15];
                map[15] = map[j];
                map[j] = temp;
                swap();
                checkWin();
                break;
            }

        }


    }
}