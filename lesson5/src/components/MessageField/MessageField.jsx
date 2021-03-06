import {Component, createRef, Fragment} from 'react';
import {Message} from '../Message';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {sendMessage} from '../../redux/actions/messageActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './message-field.css'


class _MessageField extends Component {

    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        textField: '',
        msgBoot: ['Welcome to chat', 'I am just robot', 'Good communication'], 
    };

    addMessage = () => {
        const chatId = this.props.currentChat;

        this.state.textField && this.props.sendMessage('1', this.state.textField, 'den', chatId);
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
                this.props.sendMessage('0', this.state.msgBoot[rand], 'bot', chatId);
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
        const { messages = {}, currentChat: chatId } = this.props;

        return (
                <div className='message-field'>
                    {
                        this.props.currentChat && (
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

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({sendMessage}, dispatch);

const MessageField = connect(mapStateToProps, mapDispatchToProps)(_MessageField);

export {MessageField};