import App from './components/App';
import './styles/styles.scss';
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Shows the `#back` side of a dizmo; assignment to `window`
 * enables in the dizmo menu the *settings* entry.
 * @global
 */
window.showBack = () => dizmo.showBack();

/**
 * Shows the `#front` side of a dizmo; assignment to `window`
 * enables in the dizmo menu the *content* entry.
 * @global
 */
window.showFront = () => dizmo.showFront();

/**
 * Handler to be invoked once the dizmo is ready.
 * @function
 */
const onDizmoReady = () => {
    dizmo.subscribeToAttribute('settings/framecolor', () => {
        const front = document.getElementById('front');
        front.style.color = dizmo.getAdaptiveColor();
    });
    const done = document.getElementById('done');
    done.onclick = () => dizmo.showFront();
    const front = document.getElementById('front');
    ReactDOM.render(<App/>, front);
};
document.addEventListener('dizmoready', onDizmoReady, {
    once: true
});
