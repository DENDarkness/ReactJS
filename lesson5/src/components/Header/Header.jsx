import { Component } from 'react';
import { Profile } from '../Profile';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className="header-name">
                    <Link to={`/`}>
                        <h3>My Messager</h3>
                    </Link>
                </div>
                <div className="profile">
                    <Link to={`/profile`}>
                        <IconButton className="profile-icon">
                            <Avatar src={'https://i.pravatar.cc/300'} to={`/profile`}/>
                        </IconButton>
                    </Link>
                </div>
            </div>
        );
    }
}

export { Header };