 let timer

 function temporizador(time) {
     timer = time, minutes, seconds
     var display = document.querySelector('#time')

     var id = setInterval(function () {
         minutes = parseInt(timer / 60)
         seconds = parseInt(timer % 60)

         //caso o valor seja menor que 10, add 0 esquerda
         minutes = minutes < 10 ? "0" + minutes : minutes
         seconds = seconds < 10 ? "0" + seconds : seconds

         display.textContent = `${minutes} : ${seconds}`
         if (--timer < 0) {
             clearInterval(id)
         }
     }, 1000)
 }
 document.getElementById('start').onclick = () => {
    timer = document.getElementById('minutes-user').value
    temporizador(time) 
 }

 document.getElementById('stop').onclick = () => {
    clearInterval(id)
 }

 document.getElementById('resume').onclick = () => {
    temporizador(time)
 }

 console.log(timer)