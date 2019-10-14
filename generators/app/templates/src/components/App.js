import React from 'react';
import './App.scss';

export class App extends React.Component {
    render() {
        return (
            <h1>Hello {bundle.getAttribute('name')}!</h1>
        );
    }
}
