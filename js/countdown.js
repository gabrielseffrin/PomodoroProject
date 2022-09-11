let _timer
let _id
let totalTime
const _posicao = [1, 2]

document.getElementById('enviar').onclick = () => {
    totalTime = _timer = document.getElementById('minutes-user').value * 60
}

function positicaoPomodoro(posicao) {
    switch (posicao) {
        case 1:
            stops()
            temporizador(_timer)
            return;
        case 2:
            stops()
            _timer = 5*60
            totalTime = _timer
            temporizador(5*60)
            return;
        default:
            break;
    }
}

function temporizador(time) {
    _timer = time
    //total = _timer
    console.log(totalTime)
    let display = document.querySelector('#cont')
    let progress = document.querySelector('.progress-bar')

    _id = setInterval(function () {
        let minutes = parseInt(_timer / 60)
        let seconds = parseInt(_timer % 60)

        let percentageProgress = ((totalTime - _timer ) / totalTime) * 100 

        //caso o valor seja menor que 10, add 0 esquerda
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.innerHTML = `${minutes}:${seconds}`
        progress.style.cssText = `width: ${''+percentageProgress}%`
        if (--_timer < 0) {
            stops()            
            positicaoPomodoro(_posicao[1])
        }
    }, 1000)
}

let verificarValor = () => {
    if(_timer == undefined){
        totalTime = 25 * 60
        return _timer = totalTime
    }        
    else {
        totalTime = _timer
        return _timer
    }
}

function start() {
    temporizador(verificarValor())
}

function stops() {
    clearInterval(_id)
}

function resume() {
    temporizador(_timer)
}

// let minutesUser
// let _break
// let longBreak

// let timePomodoro
// let _tempoRestante

// let refreshInterval_Id 

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