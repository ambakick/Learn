alert("connected");

var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winning = document.querySelector("#winning");  //=document.querySelector("p span")
var p1score = 0;
var p2score = 0;
var gameOver=false;
var win=5;

var p1disp = document.querySelector("#p1display");
var p2disp = document.querySelector("#p2display");

function reset1(){
    p1score=p2score=0;
    p1disp.textContent=p2disp.textContent=0;
    gameOver=false;
    p2disp.style.color="black";
    p1disp.style.color="black";
}

numInput.addEventListener("change",function(){
    winning.textContent=numInput.value;
    win = Number(numInput.value);
    reset1();
})
p1button.addEventListener("click",function(){
    if(!gameOver)
    {
        p1score++;
        if(p1score==win)
        {
            gameOver=true;
            p1disp.style.color="green";
        }
        p1disp.textContent=p1score;
    }

})

p2button.addEventListener("click",function(){
    if(!gameOver)
    {
        p2score++;
        if(p2score==win)
        {
            gameOver=true
            
            p2disp.style.color="green";
        }
        console.log("click");
        p2disp.textContent=p2score;
    }
})

reset.addEventListener("click",function(){
    reset1();
});

