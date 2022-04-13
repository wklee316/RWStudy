var box1Lines = document.getElementsByClassName("firstBox");
var box2Lines = document.getElementsByClassName("secondBox");
var box1 = document.getElementById("box1");

var blockString = ["🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥", "🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨",
"🟩 🟩 🟩 🟩 🟩 🟩 🟩", "🟦 🟦 🟦 🟦 🟦", "🟪 🟪 🟪", "⬛"];

var box1Stack = [];
var box2Stack = [];
var box3Stack = [];

function init(){
    
    box1Stack = [0,1,2,3,4,5];

    for(var i =0; i<6; i++){
        box1Lines[i].innerHTML = blockString[i];
    }
}

function box1Click(){
    box2Stack.push(box1Stack.pop());
    aply();
}

function aply(){
    clear();
    for(var i = 0; i<6; i++){
        if(box1Stack[i] != null)
            box1Lines[i].innerHTML = blockString[box1Stack[i]];
        if(box2Stack[i] != null)
            box2Lines[i].innerHTML = blockString[box2Stack[i]];
    }
}

function clear(){
    for(var i =0; i<6; i++){
        box1Lines[i].innerHTML = "";
        box2Lines[i].innerHTML = "";
    }
}

