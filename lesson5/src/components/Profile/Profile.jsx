import {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import './profile.css';


class Profile extends Component {

    render() {
//        const large = useSizedIconButtonStyles({ padding: 8, childSize: 48 });
        return (
                <div className="profile1">
                    <div className="profile-avatar">
                        <IconButton className="profile-icon">
                            <Avatar src={'https://i.pravatar.cc/300'} to={`/profile`}/>
                        </IconButton>
                    </div>
                    <div>
                        Имя: Денис
                    </div>
                    <div>
                        Фамилия: Булавин
                    </div>
                </div>
            
        );
    }
}

export {Profile};