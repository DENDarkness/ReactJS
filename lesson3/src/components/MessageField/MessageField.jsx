import {Component, createRef, Fragment} from 'react';
import {Message} from '../Message';
import TextField from '@material-ui/core/TextField';
import './message-field.css'


class MessageField extends Component {

    state = {
        message: '',
        msgBoot: ['Welcome to chat', 'I am just robot', 'Good communication'],
//        msgOrion: ['Hello everyone', 'How are you?', 'Wassup?'],
//        message: '',
        msg: [
            { id: 1, nick: 'den', value: 'Hello World'},
            { id: 2, nick: 'fuzz', value: 'How are you?'},
        ],  
    };

    addMessage = () => {
        this.setState({msg: [...this.state.msg, {id: 3, nick: 'orion', value: this.state.message}]})
        this.setState({message: ''});
    //    const rand = Math.floor(Math.random() * Math.floor(3))
    //    this.setState({msg: [...this.state.msg, {id: 3, nick: 'orion', value: this.state.msgOrion[rand]}]});
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
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

    keyPress = (event) => {
        if (event.keyCode == 13) {
            console.log('Enter', )
            this.addMessage()

        }
    }

    render() {
        console.log('render', this.state);
        const { msg = []} = this.state;
//        this.handleChange = this.handleChange.bind(this);
        

        return (
            <Fragment>
                <div className='message-field'>
                    <div className='message-field__text'>
                        {msg.map((item, index) => (
                            <Message key={index} item={item} />
                        ))}
                    </div>
                <div className="message-field__input">
                    <TextField id="standard-basic" label="Введи текст сообщения" onKeyDown={this.keyPress} onChange={this.handleChange} value={this.state.message}  className="message-field__input_text" />
                </div>

                </div>


{/*                 <button onClick={this.addMessage}>Send Message</button>
 */}


            </Fragment>
        );
    }
}

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */

export {MessageField};