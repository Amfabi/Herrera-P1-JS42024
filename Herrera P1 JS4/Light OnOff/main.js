const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOffSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightswitch.src = "switchOff.png";
        status.textContent = "Turn On The Ligths.";
    }else{
        lightswitch.src = "switchOn.png";
        lightbulb.src = "lightOn.png";
        status.textContent = "You DID IT! Now, Turn OFF the Lights.";
    }
    isLightOn = !isLightOn;
}
);
