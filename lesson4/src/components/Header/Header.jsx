import { Component } from 'react';
import { Profile } from '../Profile';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends Component {

    render() {
        return (
            <div id='header' className='header'>
                <Link to={`/`}>
                    <div className="header-name">
                        <h3>My Messager</h3>
                    </div>
                </Link>
                <Link to={`/profile`}>
                    <div className="profile">
                        <IconButton className="profile-icon">
                            <Avatar src={'https://i.pravatar.cc/300'} to={`/profile`}/>
                        </IconButton>
                    </div>
                </Link>
            </div>
        );
    }
}

export { Header };