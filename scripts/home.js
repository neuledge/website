particlesJS('particles-js', {
  particles: {
    number: {
      value: 150,
      // density: {
      //   enable: true,
      //   value_area: 800
      // }
    },
    // color: {
    //   value: '#999',
    // },
    line_linked: {
      distance: 150,
      // color: '#999',
      opacity: 0.3,
      // width: 2,
    },
    opacity: {
      // value: 0.7,
      // random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      speed: 3,
      // out_mode: 'bounce',
    }
  }
});

var shineTimer = null;
function featuresShine() {
  var features = document.getElementById('features');
  if (!features || !features.className) return;

  var className = ' shine';
  var hasShine = features.className.indexOf(className) !== -1;

  var relativeOffsetTop = features.offsetTop - window.pageYOffset;
  var relativeOffsetBottom = relativeOffsetTop + features.offsetHeight;
  var isVisible = relativeOffsetTop > -features.offsetHeight && relativeOffsetTop < features.offsetHeight;
  var shouldShine = relativeOffsetBottom < window.innerHeight && relativeOffsetTop > 0;

  if (hasShine === shouldShine || isVisible === hasShine) {
    return;
  }

  if (shineTimer) {
    clearTimeout(shineTimer);
    shineTimer = null;
  }

  if (shouldShine) {
    shineTimer = setTimeout(function() {
      shineTimer = null;
      features.className += className;
    }, 400);
  } else {
    features.className = features.className.replace(className, '');
  }
}

document.addEventListener('scroll', featuresShine);