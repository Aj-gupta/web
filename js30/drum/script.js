function playSound(e){
    //console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//  console.log(audio);
    if(!audio)return; //stop the function running all together
    audio.currentTime = 0;  // play audio from the start everytime press the key
    audio.play();
    key.classList.add("playing");
}
function playSoundClick(clickObj) {

 const audio = document.querySelector(`audio[data-key="${clickObj.target.innerText.charCodeAt()}"]`);
 const key = document.querySelector(`.key[data-key="${clickObj.target.innerText.charCodeAt()}"]`);
//console.log(key);
 if(!audio)return; //stop the function running all together
 audio.currentTime = 0;  // play audio from the start everytime press the key
 audio.play();
 key.classList.add("playing");
}

function removeTransition(obj) {
  if(obj.propertyName !== 'transform') return;
  this.classList.remove("playing");
}
window.addEventListener("keydown",playSound);
var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
keys.forEach(key => key.addEventListener('click',playSoundClick));



//keys.forEach(key => key.addEventListener('keydown',playSoundClick));
// window.addEventListener('onclick',() => {
  //console.log(keys);
// })
