function run(number) {
    var fieldDiv = document.getElementById(number);
    var field = fieldDiv.innerHTML;
    if (field == "0") {
        fieldDiv.innerHTML = "o";
        fieldDiv.style.color = "green";
        
        if(checkRow() == "false"){
            botRun();
        }else{
            return;
        }
    }
    
}

function botRun() {
    var innerField = "x";
    var rnd1;
    var rnd2;
    var rnd;
    var field;
    var fieldCount = 1;
    do {
        rnd1 = Math.floor((Math.random() * 3) + 1);
        rnd2 = Math.floor((Math.random() * 3) + 1);
        rnd1 = rnd1.toString();
        rnd2 = rnd2.toString();
        rnd = rnd1 + rnd2;
        innerField = document.getElementById(rnd).innerHTML;
        fieldCount = fieldCount + 1;
        if(fieldCount == 250){
            win("draw");
            return;
        }
    } while (innerField != "0");
    
    field = document.getElementById(rnd);
    field.innerHTML = "x";
    field.style.color = "red";
    
    checkRow();
}



function win(winner){
    
    var f11 = document.getElementById("11");
    var f12 = document.getElementById("12");
    var f13 = document.getElementById("13");
    
    var f21 = document.getElementById("21");
    var f22 = document.getElementById("22");
    var f23 = document.getElementById("23");
    
    var f31 = document.getElementById("31");
    var f32 = document.getElementById("32");
    var f33 = document.getElementById("33");
    
    var w = document.getElementById("popup");
    switch(){
        case "x":
        w.innerHTML = "You lose!";
        w.style.display = "block";
        break;

        case "o":
        w.innerHTML = "You win!";
        changeFields();
        break;

        default:
        w.innerHTML = "Draw!";
        w.style.display = "block";
        break;
    }
    
    f11.onclick = "";
    f12.onclick = "";
    f13.onclick = "";
    
    f21.onclick = "";
    f22.onclick = "";
    f23.onclick = "";
    
    f31.onclick = "";
    f32.onclick = "";
    f33.onclick = "";
}

function checkRow(){
    var f11 = document.getElementById("11");
    var f12 = document.getElementById("12");
    var f13 = document.getElementById("13");
    
    var f21 = document.getElementById("21");
    var f22 = document.getElementById("22");
    var f23 = document.getElementById("23");
    
    var f31 = document.getElementById("31");
    var f32 = document.getElementById("32");
    var f33 = document.getElementById("33");
    
    
    if (f11.innerHTML == "x" && f12.innerHTML == "x" && f13.innerHTML == "x"){
        win(f11.innerHTML);
    } else if (f21.innerHTML == "x" && f22.innerHTML == "x" && f23.innerHTML == "x"){
        win(f21.innerHTML);
    } else if (f31.innerHTML == "x" && f32.innerHTML == "x" && f33.innerHTML == "x"){
        win(f31.innerHTML);
    } else if (f11.innerHTML == "x" && f21.innerHTML == "x" && f31.innerHTML == "x"){
        win(f11.innerHTML);
    } else if (f12.innerHTML == "x" && f22.innerHTML == "x" && f32.innerHTML == "x"){
        win(f12.innerHTML);
    } else if (f13.innerHTML == "x" && f23.innerHTML == "x" && f33.innerHTML == "x"){
        win(f13.innerHTML);
    } else if (f11.innerHTML == "x" && f22.innerHTML == "x" && f33.innerHTML == "x"){
        win(f11.innerHTML);
    } else if (f13.innerHTML == "x" && f22.innerHTML == "x" && f31.innerHTML == "x"){
        win(f13.innerHTML);
    } else {
        return "false";
    }
}

function changeFields(){
    var t = 11;
    var t2;
    var td;
    do{
        td = document.getElementById(t);
        if(td.innerHTML == "x"){
            td.innerHTML = "o";
            td.style.color = "green";
        } else if(td.innerHTML == "o"){
            td.innerHTML = "x";
            td.style.color = "red";
        }
        if(t == 13 || t == 23){
            t = t + 8;
        } else {
            t = t + 1;
        }
    }while(t!=34)
    
    checkRow();
    
}
