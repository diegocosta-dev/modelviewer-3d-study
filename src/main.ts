import '@google/model-viewer';
import './router';
import slider from './js/slider';
import Alpine from 'alpinejs'
import '../index.css';

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  Alpine.data('slider', slider)
})

Alpine.start()