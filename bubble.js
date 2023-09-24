var timer=60;
var score=0;
var hit=0
function increasescore()
{ 

    score+=10;
    document.querySelector("#score").textContent=score;
}
function decreasescore()
{
    score-=10;
    document.querySelector("#score").textContent=score;
}
function getnewhit()
{    
    hit= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hit;
}
function makebubble()
{
var cluster=" ";
for(var i=1;i<153;i++)
{
    var rn=Math.floor(Math.random()*10)
    cluster += `<div class="bubble">${rn}</div>` ;
}

document.querySelector("#pbottom").innerHTML=cluster
}
function runtime()
{
   var t=setInterval(function(){
   if(timer>0)
   {
   timer--
   document.querySelector("#timeval").textContent=timer;
   }
   else
   {
    clearInterval(t);
    document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1><br><h1>your score is:${score}`;
   }
   },1000)

}
var o=0;
document.querySelector("#pbottom").addEventListener("click",function(details){
    o=Number(details.target.textContent);
    console.log(o);
    if(o==hit)
    {
        increasescore();
        makebubble();
        getnewhit();
    }
    else
    {
        decreasescore();
        makebubble();
        getnewhit();
    }
})
makebubble();
runtime();
getnewhit();
increasescore();

