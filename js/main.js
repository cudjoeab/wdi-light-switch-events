// When someone hits the button in the switch, 
// remove the current state class (on/off), and 
// apply the opposite class (on/off)
let lightSwitch = document.querySelector('.plate');
let roomStatus = document.querySelector('.light'); 
let message = document.querySelector('.status');
let classes = message.classList; 

lightSwitch.addEventListener('click', function() {
    console.log('switch clicked'); 
    
    if(roomStatus.classList.toggle('dark')){
        message.textContent = "Who turned out the lights?!"
    } 
    if(roomStatus.classList.toggle('light')){
        message.textContent = "It's so bright in here!"
    }
    


})


