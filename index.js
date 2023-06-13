var n=document.querySelectorAll(".drum").length;

// detecting butoon press
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
       
        var buttonInnerHTML=this.innerHTML;
        this.style.color="black";
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML); 
    
    });
    // detecting key board press
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });


    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 =new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "l":
                var cr=new Audio('sounds/crash.mp3');
                cr.play();
                break;
            
            case "s":
                var tom2 =new Audio('sounds/tom-2.mp3');
                tom2.play();
                break; 
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var sn=new Audio('sounds/snare.mp3');
                sn.play();
                break;    
            case "k":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "a":
                var tom3 =new Audio('sounds/tom-3.mp3');
                tom3.play(); 
                break;
            default:
                console.log(ele);
                break;
        }
    }
}

function buttonAnimation(currkey){

var activeButton= document.querySelector("."+currkey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}
