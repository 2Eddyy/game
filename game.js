

    var number=1;
    var n=1;
    var m=0;
    var dices=['1','2','3','4','5','6'];
    var id=100;
    for (a=0;a<5;a++)
    {
      for (b=0;b<=9;b++)
        { 
          document.getElementById("board").innerHTML+="<div class='boardbox left' id='box"+id+"' ></div>"
          id--;
        }
      for (c=0;c<=9;c++)
        { 
          document.getElementById("board").innerHTML+="<div class='boardbox right'id='box"+id+"'></div>"
          id--;
        }   
     } 
    document.getElementById("box"+number).innerHTML="<img id='counter' class='img' src='http://www.freepngimg.com/thumb/chess/9-chess-pawn-png-image-thumb.png'></img>"

var random=function()
{   
 
  document.getElementById("dice").disabled=false;
  var dices=['0','1','2','3','4','5','6'];
  a= Math.ceil(Math.random()*6);
  document.getElementById("dice").innerHTML=dices[a];
  console.log(a);;
  if(n+a>100)
  {
    a=0;
   }
   d=0;
   move()
}
var move=function()
{
document.getElementById("dice").disabled=true;
t=setInterval(move2,200)
}
var move2=function()
{ 
n++;
m++;
if(m<(a)||m==(a))
 { 
 if(d==(a-1))
     {
        if (n==4)
          {
             n= 39;   //ladder base to top dice move
          }
        else if (n==36)
          {
             n=8;
          }           //snake head to tail move
        else if (n==30)
          {
             n=12;
          }             //snake head to tail move
        else if (n==26)
          {
             n=75;
          }             //ladder base to top move
        else if (n==33)
          {
             n=52;
          }             //ladder base to top move
        else if (n==70)
          {
             n=50;
          }           //snake head to tail move
        else if (n==99)
          {
             n=42;
          }            //snake head to tail move
        else if (n==59)
          {
             n=63;
          }          //ladder base to top move
        else if (n==86)
          {
             n=57;
          }            //snake head to tail move
        else if (n==73)
          {
             n=93;
          }            //ladder base to top move
        
       else if (n==100)
         {
           alert("You win");
           document.getElementById("dice").style.visibility = "hidden";
           n=1;
         }      //player reach 100 then one alert msg u win then ok press new game start.
       else
         {
            n=n;
         }
     }
     var s=document.getElementById("counter");
     document.getElementById("box"+n).appendChild(s); 
     d+=1;
   }
 else
   {
      m=0;
      n-=1;
      clearInterval(t);
      document.getElementById("dice").disabled=false;
   }
}