// Components
import Collapse from './components/Collapse';
import Slider from './components/Slider.js';

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('body').classList.contains('home')) {
    new Slider(document.querySelectorAll('.swiper-container'));
  }
});

// Export as Toolkit library
export {
  Collapse,
};

