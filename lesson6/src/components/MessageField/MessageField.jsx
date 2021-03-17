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
        router: PropTypes.object.isRequired,
    };

    state = {
        textField: '',
    };

    addMessage = () => {
        const chatId = this.props.currentChat;
        const pathName = this.props.router.pathname;

        this.state.textField && this.props.sendMessage('1', this.state.textField, 'den', chatId, pathName);
        this.setState({textField: ''});
    }

    // Для скрола
    fieldRef = createRef();

    handleChange = (event) => {
        this.setState({textField: event.target.value});
    }

    componentDidUpdate() {
        if (this.fieldRef.current) {
            this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
        }
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
    router: state.router.location,
});

/* const mapDispatchToProps = (dispatch) => 
    bindActionCreators({sendMessage}, dispatch); */

const MessageField = connect(mapStateToProps, {sendMessage})(_MessageField);

export {MessageField};