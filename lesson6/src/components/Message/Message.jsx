import {Component} from 'react';
import './message.css'

class Message extends Component {
    render() {
        return(
            <div className='message'>
                {this.props.item.nick}: {this.props.item.text}
            </div>
            );
    }
}

export {Message};

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */