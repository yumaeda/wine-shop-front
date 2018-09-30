import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('example')
    );
}

setInterval(tick, 1000);
