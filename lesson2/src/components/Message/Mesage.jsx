import {Component} from 'react';

class Message extends Component {
    render() {
        return(<div className='my-class'>{this.props.item.nick}: {this.props.item.value}</div>);
    }
}

export {Message};

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */