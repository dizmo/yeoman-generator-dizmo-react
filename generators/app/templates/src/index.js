import { App } from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';

window.showBack = dizmo.showBack;
window.showFront = dizmo.showFront;

document.addEventListener('dizmoready', () => {
    ReactDOM.render(
        <App />, document.getElementById('front')
    );
    document.getElementById('done').onclick = () => {
        dizmo.showFront();
    };
}, {
    once: true
});
