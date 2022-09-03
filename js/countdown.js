let minutesUser
let breakUser
let longBreak

let timePomodoro

let refreshIntervalId 

function onclickStartButton() {
    clearInterval(refreshIntervalId)
    setValueTimer()
    var duration = minutesUser * 60
    display = document.querySelector('#time')
    startPomodoro(duration, display)
}

document.getElementById('stop').onclick = () => {
    clearInterval(refreshIntervalId)

}
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
            clearInterval(refreshIntervalId)
            shortBreak((breakUser * 60), display)
        }
    }, 1000);
}

let shortBreak = (breakUser, display) => {
    var timer = breakUser,
        minutes, seconds

    refreshIntervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(refreshIntervalId)
            longBreakTimer((longBreak * 60), display)
            
        }
    }, 1000);
}

let longBreakTimer = (longBreak, display) => {
    var timer = longBreak,
        minutes, seconds

    refreshIntervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(refreshIntervalId)
        }
    }, 1000);
}