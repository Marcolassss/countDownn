let count = new Date('december 15,2021 00:01:00').getTime()
let x = setInterval(function () {
  let now = new Date().getTime()
  let d = count - now

  /*Calculo de dias 1000 x 60 x 60 x 24h*/

  let days = Math.floor(d / (1000 * 60 * 60 * 24))
  let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((d % (1000 * 60)) / 1000)
  /*GET = PEGAR (PEGAR ELEMENTO BY 'DIAS')*/
  document.getElementById('dias').innerHTML = days
  document.getElementById('horas').innerHTML = hours
  document.getElementById('minutos').innerHTML = minutes
  document.getElementById('segundos').innerHTML = seconds

  if (d <= 0) {
    clearInterval(x)
  }
}, 1000)
