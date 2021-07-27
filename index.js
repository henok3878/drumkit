var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {

  var kitType = this.getInnerHTML();
  console.log(kitType + " is clicked.");
  makeSound(kitType);
  buttonAnimation(kitType);
}

document.addEventListener("keypress", function(event) {
  console.log(event.key + " is pressed.");
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key) {
  var soundType;
  switch (key) {
    case "w":
      soundType = "tom-1.mp3";
      break;
    case "a":
      soundType = "tom-2.mp3";
      break;
    case "s":
      soundType = "tom-3.mp3";
      break;

    case "d":
      soundType = "tom-4.mp3";
      break;
    case "j":
      soundType = "snare.mp3";
      break;
    case "k":
      soundType = "crash.mp3";
      break;
    case "l":
      soundType = "kick-bass.mp3";
      break;
    default:
      console.log(key + " has triggered default case.");
    }
    console.log("audio : " + soundType);
    if (soundType != undefined) {
        var audio = new Audio("sounds/" + soundType);
        audio.play();
    }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);
}
