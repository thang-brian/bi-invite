var AnimationModule = (function () {
  function initialize() {
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
  function bokeh() {
    let bokehArea = document.querySelector(".bokeh-area");
    let bokehNumber = 25;
    for (let i = 0; i < bokehNumber; i++) {
      const bokeh = document.createElement("bokeh");
      bokeh.classList.add("bokeh");
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDuration = Math.random().toFixed(3) * 5 + 5;
      const randomDelay = Math.random().toFixed(3) * 5;
      bokeh.style.backgroundColor = "#" + randomColor;
      bokeh.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
      bokeh.style.animationDuration = `${randomDuration}s`;
      bokeh.style.animationDelay = `-${randomDelay}s`;
      bokehArea.appendChild(bokeh);
    }
  }
  window.addEventListener("scroll", initialize);
  window.addEventListener("load", initialize);
  document.addEventListener("DOMContentLoaded", function () {
    bokeh();
  });
  return { initialize: initialize };
})();
AnimationModule.initialize();
