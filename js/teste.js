export default class Countdown {

    constructor(minutes, breakTime, longBreakTime) {
        this._minutes = minutes * 60
        this._breakTime = breakTime * 60
        this._longBreakTime = longBreakTime * 60
        this.refreshIntervalId = null
        this.display = document.querySelector('#time')
    }

    temporizador(time, display) {

        timer = time, minutes, seconds
    
        var id = setInterval(function() {
    
            this.minutes = parseInt(timer / 60)
            seconds = parseInt(timer % 60)
    
            //caso o valor seja menor que 10, add 0 esquerda
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = `${minutes} : ${seconds}`
    
            if(--timer < 0) {
                clearInterval(id)
            }
        }, 1000)
    }
    shotBreak() {
        timer
    }

    get _tempoRestante() { 
        return this.timer
    }
}