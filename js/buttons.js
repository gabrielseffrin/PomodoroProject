import Countdown from "./teste.js";

//const tempoParaOWWB = new Countdown("13 August 2020 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("#timer");
let pomodoro
document.getElementById('enviar').onclick = () => {
  minutes = document.getElementById('minutes-user').value
  breakTime = document.getElementById('break').value
  longBreakTime = document.getElementById('long-break').value
  pomodoro = new shortBreak(minutes, breakTime, longBreakTime, time)
}

document.getElementById('play').onclick = () => {
  startPomodoro()
}

document.getElementById('stop').onclick = () => {
  stopPomodoro()
}

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);

export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days < 10 ? "0" + this.days : this.days;
    const hours =
      this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
    const minutes =
      this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
    const seconds =
      this.seconds % 60 < 10 ? "0" + (this.seconds % 60) : this.seconds % 60;
    return [days, hours, minutes, seconds];
  }
}