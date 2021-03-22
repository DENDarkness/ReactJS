import { Component } from 'react';

import { Header } from '../Header';
import { Layout } from '../Layout';
import { Router} from '../Router';

import './app.css';

class App extends Component {
    
    render() {
        return (
            <div id='app' className="app">
            < Header />
            < Router />

    </div>
        );
    }

}

export { App };