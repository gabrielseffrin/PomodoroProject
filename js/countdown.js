let timer = document.getElementById('minutes-user').value * 60
let id

function temporizador(time) {
    timer = time
    var display = document.querySelector('#time')

    id = setInterval(function () {
        var minutes = parseInt(timer / 60)
        var seconds = parseInt(timer % 60)

        //caso o valor seja menor que 10, add 0 esquerda
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = `${minutes}:${seconds}`
        if (--timer < 0) {
            clearInterval(id)
        }
    }, 1000)
}

function start() {
    temporizador(timer)
}

function stops() {
    clearInterval(id)
}

function resume() {
    temporizador(timer)
}

console.log(timer)

// let minutesUser
// let _break
// let longBreak

// let timePomodoro
// let _tempoRestante

// let refreshIntervalId 

// function onclickStartButton() {
//     clearInterval(refreshIntervalId)
//     setValueTimer()
//     var duration = minutesUser * 60
//     display = document.querySelector('#time')
//     startPomodoro(duration, display)
// }


// document.getElementById("enviar").onclick = function () {
//     setValueTimer();
// }

// document.getElementById('stop').onclick = () => {
//     clearInterval(refreshIntervalId)
// }
// function setValueTimer() {

//     clearInterval(refreshIntervalId)
    
//     minutesUser = document.getElementById('minutes-user').value 
//     _break = document.getElementById('break').value 
//     longBreak = document.getElementById('long-break').value

//     if (minutesUser < 0)
//         minutesUser *= -1
//     if (_break < 0)
//         _break *= -1
//     if (longBreak < 0)
//         longBreak *= -1
// }

// function startPomodoro(duration, display) {  
//     var _tempoRestante = duration,
//         minutes, seconds

//     refreshIntervalId = setInterval(function () {
//         minutes = parseInt(_tempoRestante / 60, 10);
//         seconds = parseInt(_tempoRestante % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         _tempoRestante

//         if (--_tempoRestante < 0) {
//             clearInterval(refreshIntervalId)
//             shortBreak((_break * 60), display)
//         }
//     }, 1000);
// }

// let shortBreak = (_break, display) => {
//     var timer = _break,
//         minutes, seconds

//     refreshIntervalId = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//             clearInterval(refreshIntervalId)
//             longBreakTimer((longBreak * 60), display)
            
//         }
//     }, 1000);
// }

// let longBreakTimer = (longBreak, display) => {
//     var timer = longBreak,
//         minutes, seconds

//     refreshIntervalId = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//             clearInterval(refreshIntervalId)
//         }
//     }, 1000);
// }