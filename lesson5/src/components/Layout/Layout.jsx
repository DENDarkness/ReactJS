import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import {ChatList} from '../ChatList';
import {MessageField} from '../MessageField';
import './layout.css';

class _Layout extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {

        const { match } = this.props;

        return (
            <div className="layout">
                    < ChatList />
                    {/* < MessageField currentChat={match.params.chatId}/> */}
                    < MessageField currentChat={match.params.chatId}/>
            </div>
        );
    }
}

const Layout = withRouter(_Layout);

export { Layout };