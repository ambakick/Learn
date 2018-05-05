var h1=document.querySelector("h1");
// selecting the h1 tag in html
var lis=document.querySelectorAll("li");

for(var i=0;i<lis.length;i++)
{
    lis[i].addEventListener("click",function(){
        this.style.color="pink";
        console.log("li number "+i+"was clicked");
    });
}
h1.addEventListener("click",function(){
    console.log("h1 was clicked");
    // to log in the console
    alert("h1 was clicked");
    //to bring up alert in chrome
})

