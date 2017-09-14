// Star Wars
window.onload = function () {
  console.log('hey')
  let lighthalf = document.getElementById('shiplight')
  let darkhalf = document.getElementById('shipdark')
  let shipFly = document.getElementsByClassName('shipFly')
  TweenMax.to(lighthalf, 2, { height: 50, ease: Power2.easeInOut, repeat: -1, yoyo: true })
  TweenMax.to(darkhalf, 2, { height: 50, ease: Power2.easeInOut, repeat: -1, yoyo: true })
}
