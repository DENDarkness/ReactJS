import { Component } from 'react';
import './header.css'

class Header extends Component {

    render() {
        return (
            <div id='header' className='header'>
                <h3>My Messager</h3>
            </div>
        );
    }
}

export { Header };