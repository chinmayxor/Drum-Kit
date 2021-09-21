function fun()
{
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
}
var n=document.querySelectorAll(".drum").length;


for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var x=this.innerHTML;

        switch (x) 
        {
            case "w":
                var y=new Audio("sounds/tom-1.mp3");
                y.play();
                break;

             case "a":
                var y=new Audio("sounds/tom-2.mp3");
                y.play();
                 break;

             case "s":
                var y=new Audio("sounds/tom-3.mp3");
                 y.play();
                 break;   
                        
             case "d":
                var y=new Audio("sounds/tom-4.mp3");
                y.play();
                break; 
                  
            case "k":
                var y=new Audio("sounds/crash.mp3");
                y.play();
                break;   

             case "l":
                var y=new Audio("sounds/kick-bass.mp3");
                 y.play();
                break;                    
        
            case "j":
                var y=new Audio("sounds/snare.mp3");
                y.play();
                break;

            default:
                break;
        }
        
    });
    
    
}

