import {
    User
} from "../model/user.js"

let timeRestante
let idToStopTimer

let totalTime //guardando o tempo total
let timeToFocus = 25 * 60
let shortBreak = 5 * 60
const _posicao = [1, 2]

let audio;

let start = () => {
    audio = new Audio('assets/audio/clockRing.mp3')

    temporizador(totalTime == undefined ? timeToFocus : timeRestante)
}

document.getElementById('enviar').onclick = () => {
    timeToFocus = document.getElementById('minutes-user').value * 60
    shortBreak = document.querySelector('#break').value * 60
}

document.getElementById('play').onclick = () => {
    start()
}

document.getElementById('resume').onclick = () => {
    resume()
}

document.getElementById('stops').onclick = () => {
    stops()
}

function posicaoPomodoro(posicao) {
    switch (posicao) {
        case 1:
            //stops()
            audioplay()

            var condicao = confirm('Time to focus')

            if (condicao) {
                totalTime = timeToFocus
                temporizador(timeToFocus, 1)
                updateTimeUser(timeToFocus)

            } else {
                stops()
            }
            return;
        case 2:
            //stops()
            audioplay()

            var condicao = confirm('Time to a short break')

            if (condicao) {
                totalTime = shortBreak
                temporizador(shortBreak, 0)
            } else {
                stops()
            }
            return;
        default:
            break;
    }
}

function temporizador(time, posicao) {
    timeRestante = time

    posicao = posicao == undefined ? 1 : posicao

    let display = document.querySelector('#cont')
    let progress = document.querySelector('.progress-bar')

    idToStopTimer = setInterval(function () {
        let minutes = parseInt(timeRestante / 60)
        let seconds = parseInt(timeRestante % 60)

        let percentageProgress = ((totalTime - timeRestante) / totalTime) * 100

        //caso o valor seja menor que 10, add 0 esquerda
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.innerHTML = `${minutes}:${seconds}`
        progress.style.cssText = `width: ${''+percentageProgress}%`

        if (--timeRestante < 0) {
            stops()
            posicaoPomodoro(_posicao[posicao])
        }

    }, 1000)
}

function stops() {
    clearInterval(idToStopTimer)
}

function resume() {
    temporizador(timeRestante)
}

function updateTimeUser(time) {
    let user = JSON.parse(localStorage.getItem('user.padrao'))
    console.log(user)
    console.log(user._username)
    user._minutes += (time / 60).toPrecision(2)
    console.log((time / 60))

    document.getElementById('tempo-focado').innerHTML = user._minutes + 'min'

    //localStorage.clear()
    user = new User(user._username, user._password, user._tasks, user._minutes)
    localStorage.removeItem('user.padrao')
    localStorage.setItem('user.padrao', JSON.stringify(user))
}

function audioplay() {

    audio.play()
    setTimeout(function () {
        audio.pause()
    }, 2000)
}

export {
    timeToFocus
}