import {Component, createRef, Fragment} from 'react';
import {Message} from '../Message';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './message-field.css'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage } from '../../redux/actions/messageActions';


class _MessageField extends Component {

    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        textField: '',
    };

    addMessage = () => {
        const chatId = this.props.currentChat;

//        const newMessage = msg.length ? msg : this.state.textMessage;
//        const currentAuthor = author.length ? author : 'me';

        this.setState({textField: ''});
    }

    // Для скрола
    fieldRef = createRef();

    handleChange = (event) => {
        this.setState({textField: event.target.value});
    }

    componentDidUpdate(prevProps) {
        

        const chatId = this.props.currentChat;
        const rand = Math.floor(Math.random() * Math.floor(3))

        if (
                prevProps.messages[chatId]?.length !== this.props.messages[chatId]?.length &&
                this.props.messages[chatId]?.length % 2 === 1
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

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
});

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({ sendMessage }, dispatch);

const MessageField = compose(
    connect(mapStateToProps, { sendMessage })
)(_MessageField);

export {MessageField};