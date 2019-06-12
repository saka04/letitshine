// Components
import Collapse from './components/Collapse';
import Slider from './components/Slider.js';
//import SmoothScroll from './components/SmoothScroll.js'
import Nav from './components/Nav';

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('body').classList.contains('organiser') || 
    document.querySelector('body').classList.contains('decorer') ||
    document.querySelector('body').classList.contains('organize') ||
    document.querySelector('body').classList.contains('decorate')) {
    new Slider(document.querySelectorAll('.swiper-container'));
  }
});

// Export as Toolkit library
export {
  Collapse,
  Nav,
};