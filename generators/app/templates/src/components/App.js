import React from 'react';
import './App.css';

export class App extends React.Component {
    render() {
        return (
            <h1>Hello {bundle.getAttribute('name')}!</h1>
        );
    }
}
