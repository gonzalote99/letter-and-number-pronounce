myName = "";
audioPlayer = document.getElementsByTagName('audio')[0];

function setLetterSound(letterVariable) {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = 'https://mahdif.github.io/alphabets-game/sounds/mp3/' + letterVariable + '.mp3';
    oggSource.src = 'https://mahdif.github.io/alphabets-game/sounds/ogg/' + letterVariable + '.ogg';

}


function setGenericSound() {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = "https://mahdif.github.io/alphabets-game/sounds/mp3/like-glass.mp3";
    oggSource.src = "https://mahdif.github.io/alphabets-game/sounds/ogg/like-glass.ogg";

}

function generateNewElement() {
    var elm = document.getElementById('big-char');
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

}

function runAudioPlayer() {
    audioPlayer.load();
    audioPlayer.play();
}

document.getElementById('hide-button').onclick = function() {
    document.getElementById('about-cont').style.display = "none";
}

document.getElementById('about-button').onclick = function() {
    document.getElementById('about-cont').style.display = "block";
}


document.getElementById('show-keyboard-button').onclick = function() {
    document.getElementById('mobile-text-input').focus();
}


document.onkeypress = function(event) {
    letterOnScreen = document.getElementById('big-char');
    console.log(event.charCode);
    if(

        event.charCode === 13 || 
        event.charCode === 32 || 
        event.charCode === 92 || 
        event.charCode === 96 || 
        event.charCode === 61 || 
        event.charCode === 43 || 
        event.charCode === 45 || 
        event.charCode === 33 || 
        event.charCode === 64 || 
        event.charCode === 35 || 
        event.charCode === 37 || 
        event.charCode === 94 || 
        event.charCode === 38 || 
        event.charCode === 42 || 
        event.charCode === 40 || 
        event.charCode === 41 || 
        event.charCode === 95 || 
        event.charCode === 91 || 
        event.charCode === 93 || 
        event.charCode === 34 || 
        event.charCode === 39 || 
        event.charCode === 47 || 
        event.charCode === 63 || 
        event.charCode === 62 || 
        event.charCode === 44 || 
        event.charCode === 60 || 
        event.charCode === 46 || 
        event.charCode === 59 || 
        event.charCode === 58 || 
        event.charCode === 123 || 
        event.charCode === 124 || 
        event.charCode === 125 || 
        event.charCode === 126 
        
    ) {
        if(event.charCode === 13) {
          letterOnScreen.innerHTML = 'Enter';
          
        } else if(event.charCode === 32) {
            letterOnScreen.innerHTML = "Space";
        } else {
            letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
        }
        setGenericSound();
        runAudioPlayer();
        generateNewElement();
    } else {
        letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
        pressedLetter = String.fromCharCode(event.charCode).toLowerCase();
        setLetterSound(pressedLetter);
        runAudioPlayer();
        generateNewElement();
    }

 
}

document.getElementById('mute-button').onclick = function() {
    if(audioPlayer.muted === false) {
        audioPlayer.muted = true;
        document.getElementById('mute-button').innerHTML = "Unmute sounds";
    } else {
        audioPlayer.muted = false;
        document.getElementById('mute-button').innerHTML = "Mute sounds";

    }
}



