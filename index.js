//detecting button press
for (var i = 0; i < 7;i++)
{
  document.querySelectorAll('button')[i].addEventListener("click",function () {
  var i = this.innerHTML;
  makesound(i);
  animation(i);
    }
  );}
//detecting keyboard press
document.addEventListener("keydown",function(event){
  makesound(event.key);
  animation(event.key);
});
function makesound(key){

      switch (key) {
        case "w":
        var audi = new Audio("sounds/tom-1.mp3");audi.play();
        break;
        case"a":
        var audi = new Audio("sounds/tom-2.mp3");audi.play();
        break;
        case"s":
        var audi = new Audio("sounds/tom-3.mp3");audi.play();
        break;
        case"d":
        var audi = new Audio("sounds/tom-4.mp3");audi.play();
        break;
        case"j":
        var audi = new Audio("sounds/snare.mp3");audi.play();
        break;
        case"k":
        var audi = new Audio("sounds/kick-bass.mp3");audi.play();
        break;
        case"l":
        var audi = new Audio("sounds/crash.mp3");audi.play();
        break;
};}
// animation
function animation(a){
  var active = document.querySelector('.'+a);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  },100);


};
