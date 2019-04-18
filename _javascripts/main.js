import Collapse from './components/Collapse';

document.addEventListener('DOMContentLoaded', function() {
  console.log('toto');
  new Collapse(document.querySelector('#header__mobile-links'));
});