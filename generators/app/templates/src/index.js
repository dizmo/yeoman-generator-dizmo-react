import { App } from './components/App';
import './style/style.scss';
import ReactDOM from 'react-dom';
import React from 'react';

window.showBack = dizmo.showBack;
window.showFront = dizmo.showFront;

document.addEventListener('dizmoready', () => {
    const front = document.getElementById('front');
    ReactDOM.render(<App/>, front);
    const done = document.getElementById('done');
    done.onclick = () => dizmo.showFront();
}, {
    once: true
});
