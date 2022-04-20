var box1Lines = document.getElementsByClassName("firstBox");
var box2Lines = document.getElementsByClassName("secondBox");
var box3Lines = document.getElementsByClassName("thirdBox");
var box1 = document.getElementById("box1");

var blockString = ["🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥", "🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨",
"🟩 🟩 🟩 🟩 🟩 🟩 🟩", "🟦 🟦 🟦 🟦 🟦", "🟪 🟪 🟪", "⬛"];

var box1Stack = [];
var box2Stack = [];
var box3Stack = [];

function init(){
    
    box1Stack = [0,1,2,3,4,5];
    box2Stack = [];
    box3Stack = [];
    aply();
}

function box1Click(){
    if(box1Stack[box1Stack.length-1] != null){
        if(box1Stack[box1Stack.length-1] > box2Stack[box2Stack.length-1] || box2Stack[box2Stack.length-1] == null)
            box2Stack.push(box1Stack.pop());
        aply();
    }
}

function box2Click(){
    if(box2Stack[box2Stack.length-1] != null){
        if(box2Stack[box2Stack.length-1] > box3Stack[box3Stack.length-1] || box3Stack[box3Stack.length-1] == null)
            box3Stack.push(box2Stack.pop());
        aply();
    }
}

function box3Click(){
    if(box3Stack[box3Stack.length-1] != null){
        if(box3Stack[box3Stack.length-1] > box1Stack[box1Stack.length-1] || box1Stack[box1Stack.length-1] == null)
            box1Stack.push(box3Stack.pop());
        aply();
    }
}


function aply(){
    clear();
    for(var i = 0; i<6; i++){
        if(box1Stack[i] != null)
            box1Lines[i].innerHTML = blockString[box1Stack[i]];
        if(box2Stack[i] != null)
            box2Lines[i].innerHTML = blockString[box2Stack[i]];
        if(box3Stack[i] != null)
            box3Lines[i].innerHTML = blockString[box3Stack[i]];
    }
}

function clear(){
    for(var i =0; i<6; i++){
        box1Lines[i].innerHTML = "";
        box2Lines[i].innerHTML = "";
        box3Lines[i].innerHTML = "";
    }
}

