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
        textField: '',
        msgBoot: ['Welcome to chat', 'I am just robot', 'Good communication'], 
        messages: {
            0: [],
            1: [],
            2: [],
            3: [],
        },
    };

    addMessage = () => {
        const chatId = this.props.currentChat;

        this.setState({
            messages: {
                ...this.state.messages,
                [chatId]: [...this.state.messages[chatId], 
                    {
                        id: 1, 
                        nick: 'den', 
                        text: this.state.textField
                    },
                ],
            }
        }) 
        this.setState({textField: ''});
    }

    // Для скрола
    fieldRef = createRef();

    handleChange = (event) => {
        this.setState({textField: event.target.value});
    }

    componentDidUpdate(_, prevState) {
        

        const chatId = this.props.currentChat;
        const rand = Math.floor(Math.random() * Math.floor(3))

        if (
                prevState.messages[chatId].length !== this.state.messages[chatId].length &&
                this.state.messages[chatId].length % 2 === 1
            ) {
            setTimeout(()=> {
                this.setState({
                    messages: {
                        ...this.state.messages,
                        [chatId]: 
                            [...this.state.messages[chatId], 
                            {id: 0, nick: 'bot', text: this.state.msgBoot[rand]}
                        ],
                    }}) 
            }, 1000);
        }
        // Скрол всегда внизу
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    keyPress = (event) => {
        if (event.key === 'Enter') {
            this.addMessage()

        }
    }

    render() {
        const { messages = []} = this.state;
        const chatId = this.props.currentChat;
//        this.handleChange = this.handleChange.bind(this);
        

        return (
                <div className='message-field'>
                    {
                        chatId && (
                            <Fragment>
                        <div className='messages' ref={this.fieldRef}>
                            {messages[chatId] && 
                            messages[chatId].map((item, index) => (
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
                                value={this.state.textField}  
                                className="message-field__input_text" 
                            />
                        </div>

                            </Fragment>

                        )
                    }


                </div>
        );
    }
}

/* const Message = (props) => {
    return <div className='my-class'>{props.item.nick}: {props.item.value}</div>
}; */

export {MessageField};