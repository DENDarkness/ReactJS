import { Component } from 'react';
import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessageField} from '../MessageField';

class Layout extends Component {

    render() {
        return (
            <div id='layout'>
                    < Header />
                    < ChatList />
                    < MessageField />
            </div>
        );
    }
}

export { Layout };