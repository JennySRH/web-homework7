var count = 0;
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
    var counter = document.getElementById("count");
    counter.innerHTML="step: "+count;
}


function start() {
    for(var i = 0;i < 16;i++) {
        var temp1 = parseInt(Math.random()*100%15);
        var temp2 = parseInt(Math.random()*100%15);
        var tmp = map[temp1];
        map[temp1] = map[temp2];
        map[temp2] = tmp;
    }
    var temp3 = parseInt(Math.random()*100%15);
    var a = map[15];
    map[15] =map[temp3];
    map[temp3] = a;
    var j;
    for(j = 0;map[j] != 15 ;j++) {}
    var a = parseInt(map[15]/4) + 1 + map[15] + 1 - (parseInt(map[15]+1)/4)*4
    while((a + j + 1)%2 != 1) {
        var temp1 = parseInt(Math.random()*100%15);
        var tmp = map[temp1];
        map[temp1] = map[j];
        map[j] = tmp;
        j = temp1;
    }
    swap();
    count = 0;
    var counter = document.getElementById("count");
    counter.innerHTML="step: "+count;    
}


function swap() {
     for(var i = 0;i < 16;i ++) {
        var temp = document.getElementById("chip"+i); 
        switch(map[i]) {
            case 0: temp.style.top = "0px";
                    temp.style.left = "0px";
                    break;
            case 1: temp.style.top = "0px";
                    temp.style.left = "89px";
                    break;
            case 2: temp.style.top = "0px";
                    temp.style.left = "178px";
                    break;
            case 3: temp.style.top = "0px";
                    temp.style.left = "267px";
                    break; 
            case 4: temp.style.top = "88px";
                    temp.style.left = "0px";
                    break;
            case 5: temp.style.top = "88px";
                    temp.style.left = "89px";
                    break;
            case 6: temp.style.top = "88px";
                    temp.style.left = "178px";
                    break;
            case 7: temp.style.top = "88px";
                    temp.style.left = "267px";
                    break;
            case 8: temp.style.top = "176px";
                    temp.style.left = "0px";
                    break;
            case 9: temp.style.top = "176px";
                    temp.style.left = "89px";
                    break;
            case 10: temp.style.top = "176px";
                    temp.style.left = "178px";
                    break;
            case 11: temp.style.top = "176px";
                    temp.style.left = "267px";
                    break;
            case 12: temp.style.top = "264px";
                    temp.style.left = "0px";
                    break;
            case 13: temp.style.top = "264px";
                    temp.style.left = "89px";
                    break;
            case 14: temp.style.top = "264px";
                    temp.style.left = "178px";
                    break;
            case 15: temp.style.top = "264px";
                    temp.style.left = "267px";
                    break;                                     
        }
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


function moveEvent(event) {
    var chips = document.getElementsByClassName("chip");
    for(var i = 0;i < 16;i++) {
        if(event.currentTarget == chips[i]) {
            if(map[i]+1 == map[15] || map[i]-1 == map[15] || 
                (map[i] <12 && map[i]+4 == map[15]) ||
                (map[i] > 3 && map[i]-4 == map[15])) 
            {
                count++;
                var counter = document.getElementById("count");
                counter.innerHTML="step: "+count;
                var temp = map[15];
                map[15] = map[i];
                map[i] = temp;
                swap();
                checkWin();
                break;
            }

        }


    }
}