export default class Countdown {

    constructor(minutes, breakTime, longBreakTime, display) {
        this._minutes = minutes * 60
        this._breakTime = breakTime * 60
        this._longBreakTime = longBreakTime * 60
        this.refreshIntervalId = null
        this.display = display
    }

    startPomodoro() {
        
        var timer = (this._minutes * 60),
            minutes, seconds

            this.refreshIntervalId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                clearInterval(refreshIntervalId)
            }
        }, 1000)
    }

    get _tempoRestante() { 
        return 
    }
}