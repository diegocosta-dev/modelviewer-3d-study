import '@google/model-viewer';
import './router';
import controlers from './js/controlers';
import Alpine from 'alpinejs'
import '../index.css';

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  Alpine.data('controlers', controlers)
})

Alpine.start()