import { Component } from 'react';
import { Profile } from '../Profile';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './header.css'

class _Header extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
    };

    handleProfile = (link) => {
        this.props.push(link);
    }

    render() {
        return (
            <div className='header'>
                <div className="header-name">
                    <Link to={`/`}> 
                        <span>MESSAGER</span>
                    </Link>
                </div>
                <div className="profile">
                    <Link to={`/profile`}>
                        <IconButton className="profile-icon" onClick={() => this.handleProfile(`/profile`)}>
                            <Avatar src={'https://i.pravatar.cc/300'} to={`/profile`}/>
                        </IconButton>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

const Header = connect(mapStateToProps, {push})(_Header);

export { Header };