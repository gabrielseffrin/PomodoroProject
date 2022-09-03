let minutesUser
let breakUser
let longBreak

let timePomodoro

function setValueTimer() {

    clearInterval(refreshIntervalId)
    
    minutesUser = document.getElementById('minutes-user').value
    breakUser = document.getElementById('break').value
    longBreak = document.getElementById('long-break').value

    if (minutesUser < 0)
        minutesUser *= -1
    if (breakUser < 0)
        breakUser *= -1
    if (longBreak < 0)
        longBreak *= -1
}

document.getElementById("enviar").onclick = function (e) {
    setValueTimer();
    e.preventDefault();
}

let refreshIntervalId 

function startPomodoro(duration, display) {  
    var timer = duration,
        minutes, seconds

    refreshIntervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


let onclickStartButton = () => {
    setValueTimer()
    var duration = minutesUser * 60
    display = document.querySelector('#time')

    let imgStart = true
    if (imgStart) {
        document.getElementById('play-button').innerHTML = "<img src='image/triangular play button.svg'>"
        imgStart = false
    } else {
        document.getElementById('play-button').innerHTML = "<img src='image/triangular play button.png'>"
    }

    startPomodoro(duration, display)
}