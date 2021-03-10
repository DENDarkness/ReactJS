import {Component, createRef, Fragment} from 'react';
import {Message} from '../Message';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './message-field.css'


class MessageField extends Component {

    static propTypes = {
        currentChat: PropTypes.string,
    };

    state = {
        message: '',
        msgBoot: ['Welcome to chat', 'I am just robot', 'Good communication'],
//        msgOrion: ['Hello everyone', 'How are you?', 'Wassup?'],
//        message: '',
/*         msg: [
            { id: 1, nick: 'den', value: 'Hello World'},
            { id: 2, nick: 'fuzz', value: 'How are you?'},
        ],  
 */    
        msg: {
            0: [
                { id: 1, nick: 'den', value: 'Hello World'},
                { id: 2, nick: 'fuzz', value: 'How are you?'},
            ],
            1: [
                { id: 1, nick: 'den', value: 'Всем привет'},
                { id: 2, nick: 'fuzz', value: 'Как дела?'},
            ],
            2: [

            ],
        },
    };

    addMessage = () => {
        const { currentChat } = this.props;

        this.setState({
            msg: {
                ...this.state.msg,
                [currentChat]: [...this.state.msg[currentChat], 
                    {
                        id: 3, 
                        nick: 'orion', 
                        value: this.state.message
                    },
                ],
            }}) 
        this.setState({message: ''});
    //    const rand = Math.floor(Math.random() * Math.floor(3))
    //    this.setState({msg: [...this.state.msg, {id: 3, nick: 'orion', value: this.state.msgOrion[rand]}]});
    }

    fieldRef = createRef();

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

/*     handleChange(event) {
        this.setState({message: event.message});
        
      } */


    componentDidUpdate(_, prevState) {

        const { currentChat } = this.props;

        const rand = Math.floor(Math.random() * Math.floor(3))
        if (
                prevState.msg[currentChat].length !== this.state.msg[currentChat].length &&
                this.state.msg[currentChat].length % 2 === 1
            ) {
            setTimeout(()=> {
                this.setState({
                    msg: {
                        ...this.state.msg,
                        [currentChat]: [...this.state.msg[currentChat], 
                        {id: 4, nick: 'bot', value: this.state.msgBoot[rand]}
                        ],
                    }}) 
            }, 1000);
        }
        
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    keyPress = (event) => {
        if (event.keyCode == 13) {
            console.log('Enter', )
            this.addMessage()

        }
    }

    render() {
        const { msg = []} = this.state;
        const { currentChat } = this.props;
//        this.handleChange = this.handleChange.bind(this);
        

        return (
            <Fragment>
                <div className='message-field'>
                    {
                        currentChat && (
                            <Fragment>
                        <div className='messages' ref={this.fieldRef}>
                            {msg[currentChat] && 
                            msg[currentChat].map((item, index) => (
                                <Message key={index} item={item} />
                            ))}
                        </div>
                        <div className='message-field__space'></div>
                        <div className="message-field__input">
                            <TextField 
                                id="standard-basic" 
                                label="Введи текст сообщения" 
                                onKeyDown={this.keyPress} 
                                onChange={this.handleChange} 
                                value={this.state.message}  
                                className="message-field__input_text" 
                            />
                        </div>

                            </Fragment>

                        )
                    }


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