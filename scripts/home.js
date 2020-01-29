particlesJS('particles-js', {
  particles: {
    number: { value: 200 },
    color: { value: '#fff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000' },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 14, opacity_min: 0.8, sync: false }
    },
    size: {
      value: 1.3,
      random: true,
      anim: { enable: true, speed: 0.1, size_min: 0.8, sync: false }
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
    // modes: {
    //   "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
    //   "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 },
    //   "repulse": { "distance": 400, "duration": 0.4 },
    //   "push": { "particles_nb": 4 },
    //   "remove": { "particles_nb": 2 }
    // }
  },
  retina_detect: true
});

(function tracking() {
  function track() {
    var event = String(
      this.getAttribute('data-action') ||
      this.getAttribute('title') ||
      this.innerText
    ).trim();

    analytics.track(event, {
      event: event,
      content: this.innerText,
      location: this.href || this.action
    });
  }

  var i;

  var links = document.getElementsByTagName('A');
  for (i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', track);
    links[i].addEventListener('contextmenu', track);
  }

  var buttons = document.getElementsByTagName('BUTTON');
  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', track);
  }

  var forms = document.getElementsByTagName('FORM');
  for (i = 0; i < forms.length; i += 1) {
    forms[i].addEventListener('submit', track);
  }
})();
