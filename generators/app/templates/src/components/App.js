import React from 'react';
import './App.scss';

/**
 * @class App
 */
class App extends React.Component {
    /** Render method */
    render() {
        return (<h1>Hello {bundle.getAttribute('name')}!</h1>);
    }
}
export default App;
