import {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {changeFirstname} from '../../redux/actions/changeFirstname';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChatList} from '../ChatList';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import TextField from '@material-ui/core/TextField';
import './profile.css';


class _Profile extends Component {

    static propTypes = {
        profile: PropTypes.object.isRequired,
        changeFirstname: PropTypes.func.isRequired,
    };

    state = {
        fName: '',

    };


    changeFirstname = () => {
        this.props.changeFirstname(this.state.fName);
        this.setState({fName: ''});

    };

    render() {
        const profile = this.props;

        return (
                <div className="layout">
                    < ChatList />
                    <div className="profile1">
                        <div className="profile-avatar">
                            <IconButton className="profile-icon">
                                <Avatar src={'https://i.pravatar.cc/300'} to={`/profile`}/>
                            </IconButton>
                        </div>
                        <div className='profile-firstname'>
                            <div>
                                Имя: {profile.profile.firstName}
                            </div>
                            <div className='change-firstname'>
                                <IconButton color="primary" aria-label="upload picture" component="span" >
                                    <BorderColorIcon />
                                </IconButton>
                            </div>

{/*                             <TextField
                                label="change firstname"
                                value={this.state.fName}
                                onChange={(event) =>
                                    this.setState({
                                        fName: event.target.value,
                                    })
                                }
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        this.changeFirstname();
                                    }
                                }}
                                /> */}
                        </div>
                        <div>
                            Фамилия: {this.props.profile.secondName}
                        </div>
                        <div>
                            Username: {this.props.profile.userName}
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({changeFirstname}, dispatch);

const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile);



export {Profile};