const confettiShower = [];
const numConfettis = 200;
const container = document.querySelector(".c-confetti-area");
const colors = [ "#f2abe7", "#9fa3ec", "#86d2e1 ", "#fec31e "];
class Confetti {
  constructor(x, y, w, h, c) {
    this.w = Math.floor(Math.random() * 10 + 5);
    this.h = this.w * 1;
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.c = colors[Math.floor(Math.random() * colors.length)];
  }
  css() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.confetti:nth-child(' + this.i + ') .askew { -webkit-animation-duration: ' + this.d + 's; animation-duration: ' + this.d + 's; -webkit-animation-delay: ' + this.dd + 's; animation-delay: ' + this.dd + 's; } .confetti:nth-child(' + this.i + ') .rotate { -webkit-animation-duration: ' + this.d + 's; animation-duration: ' + this.d + 's; -webkit-animation-delay: ' + this.dd + 's; animation-delay: ' + this.dd + 's; }';
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  create() {
    var newConfetti = '<div class="confetti" style="bottom:' + this.y + '%; left:' + this.x + '%;width:' +
    this.w + 'px; height:' + this.h + 'px;"><div class="rotate"><div class="askew" style="background-color:' + this.c + '"></div></div></div>';
    container.innerHTML += newConfetti;
    this.i = container.querySelectorAll('.confetti').length;
    this.d = Math.random() * 10 + 5;
    this.dd = Math.random() * 5;
    this.css();
  }}
;
var AnimationModule = (function () {
  function initialize() {
  }
  function animateConfetti() {
    for (var i = 1; i <= numConfettis; i++) {
      var confetti = new Confetti();
      confetti.create();
    }
    var confettis = document.querySelectorAll('.confetti');
    for (var i = 0; i < confettis.length; i++) {
      var opacity = Math.random() + 0.1;
      var animated = confettis[i].animate([
      { transform: 'translate3d(0,0,0)', opacity: opacity },
      { transform: 'translate3d(20vw,100vh,0)', opacity: 1 }],
      {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000) });
  
      confettiShower.push(animated);
    }
  }
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", initialize);
  window.addEventListener("load", initialize);
  document.addEventListener("DOMContentLoaded", function () {
    animateConfetti();
  });
  return { initialize: initialize };
})();
AnimationModule.initialize();
