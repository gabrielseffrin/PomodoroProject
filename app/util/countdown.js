'use strict';

let _timer
let _id

let totalTime //guardando o tempo total]
let timeToFocus
let shortBreak = 5
const _posicao = [1, 2]

document.getElementById('enviar').onclick = () => {
    timeToFocus = _timer = document.getElementById('minutes-user').value //* 60
    shortBreak = document.querySelector('#break').value //* 60
}

function posicaoPomodoro(posicao) {
    switch (posicao) {
        case 1:
            //stops()
            totalTime = timeToFocus
            temporizador(timeToFocus, 1)
            return;
        case 2:
            //stops()
            totalTime = shortBreak
            temporizador(shortBreak, 0)
            return;
        default:
            break;
    }
}

function temporizador(time, posicao) {
    _timer = time

    posicao = posicao == undefined ? 1 : posicao

    let display = document.querySelector('#cont')
    let progress = document.querySelector('.progress-bar')

    _id = setInterval(function () {
        let minutes = parseInt(_timer / 60)
        let seconds = parseInt(_timer % 60)

        let percentageProgress = ((totalTime - _timer) / totalTime) * 100

        //caso o valor seja menor que 10, add 0 esquerda
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.innerHTML = `${minutes}:${seconds}`
        progress.style.cssText = `width: ${''+percentageProgress}%`
        if (--_timer < 0) {
            stops()
            posicaoPomodoro(_posicao[posicao])
        }

    }, 1000)

}

let verificarValor = () => {
    if (_timer == undefined) {
        totalTime = 25 * 60
        return _timer = totalTime
    } else {
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