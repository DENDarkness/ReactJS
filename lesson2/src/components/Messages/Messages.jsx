import {Component, Fragment} from 'react';
//import {Message} from '../Message';

class Messages extends Component {

    state = {
        msgBoot: ['Welcome to chat', 'I am just robot', 'Good communication'],
        msgOrion: ['Hello everyone', 'How are you?', 'Wassup?'],
//        message: '',
        msg: [
            { id: 1, nick: 'den', value: 'Hello World'},
            { id: 2, nick: 'fuzz', value: 'How are you?'},
        ],  
    };

    addMessage = () => {
        const rand = Math.floor(Math.random() * Math.floor(3))
        this.setState({msg: [...this.state.msg, {id: 3, nick: 'orion', value: this.state.msgOrion[rand]}]});
    }

/*     handleChange(event) {
        this.setState({message: event.message});
        
      } */


    componentDidUpdate() {
        const rand = Math.floor(Math.random() * Math.floor(3))
        if (this.state.msg.length % 2 == 1) {
            setTimeout(()=> {
                this.setState({ msg: [...this.state.msg, {id: 4, nick: 'bot', value: this.state.msgBoot[rand]}],});
            }, 2000);
        }
    }

    render() {
        console.log('render', this.state);
        const { msg = []} = this.state;
//        this.handleChange = this.handleChange.bind(this);
        

        return (
            <Fragment>
                <div className='messages'>
                {msg.map((item, index) => (
                        <Message key={index} item={item} />
                    ))}
                </div>
{/*                 <form onSubmit={this.addMessage}>
                <label>
                    Введите сообщение:
                    <input type="text" value={this.state.message} onChange={this.handleChange} />
                </label>
                <button>Send message</button>
                </form>
 */}
                <button onClick={this.addMessage}>Send Message</button>                
            </Fragment>
        );
    }
}

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */

export {Messages};