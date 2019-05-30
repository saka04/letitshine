// Components
import Collapse from './components/Collapse';
import Slider from './components/Slider.js';
import SmoothScroll from './components/SmoothScroll.js'
import Nav from './components/Nav';

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('body').classList.contains('home')) {
    new Slider(document.querySelectorAll('.swiper-container'));
  }
});

// Export as Toolkit library
export {
  Collapse,
  Nav,
};