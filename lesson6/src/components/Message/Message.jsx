import {Component} from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import './message.css'

class Message extends Component {
    render() {
        return(

            <div className='message'>
                <div>
                {this.props.item.nick}: {this.props.item.text}
                </div>
                <div>
                    <ClearIcon/>
                </div>
            </div>

            );
    }
}

export {Message};

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */