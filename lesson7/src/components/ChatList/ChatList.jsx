import { Component } from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { TextField } from '@material-ui/core';
import {addChat, loadChats} from '../../redux/actions/chatActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import {readMessages} from '../../redux/actions/readMessages';
import {removeChat} from '../../redux/actions/removeChat';
import ClearIcon from '@material-ui/icons/Clear';
import Badge from '@material-ui/core/Badge';
import './chat-list.css';
import { Layout } from '../Layout';

class _ChatList extends Component {

    static propTypes = {
        chats: PropTypes.array,
        messages: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        router: PropTypes.object.isRequired,
        readMessages: PropTypes.func.isRequired,
        removeChat: PropTypes.func.isRequired,
        loadChats: PropTypes.func.isRequired,
    };

    state = {
        chatName: '',
    };

    componentDidMount() {
        this.props.loadChats();
    }

    addChat = () => {
        this.props.addChat(this.state.chatName);

        this.setState({
            chatName: '',
        });
    };


    render() {
        const chats = this.props;
        return (
            <div className='chat-list'>
                <List>
                        {this.props.chats.map((chat, index) => {
                            if (chat.status) {
                                return (
                                    <Link key={index} to={`/chat/${index}`}>
                                        <div className='button-chat'>
                                            <ListItem button onClick={() => this.props.readMessages(chat.chatName)}>
                                                <Avatar alt="Remy Sharp" src={'https://i.pravatar.cc/300'} />
                                                <div className='chat-list__list'>
                                                    <div className='chat-name'>
                                                        <ListItemText primary={chat.chatName} />                                                    
                                                    </div>
                                                </div>
                                                <Badge badgeContent={1} color="primary">
                                                    <MailIcon />
                                                </Badge>
                                            </ListItem>
                                        </div>
                                    </Link>   
                                ) 
                            } else {
                                return (
                                    <Link key={index} to={`/chat/${index}`}>
                                        <div className='button-chat'>
                                            <ListItem button onClick={() => this.props.readMessages(chat.chatName)}>
                                                <Avatar alt="Remy Sharp" src={'https://i.pravatar.cc/300'} />
                                                <div className='chat-list__list'>
                                                    <div className='chat-name'>
                                                        <ListItemText primary={chat.chatName} />                                                    
                                                    </div>
                                                </div>
                                            </ListItem>
                                            <div className='remove-chat'>
                                                <ClearIcon onClick={() => this.props.removeChat(chat.chatName)}/>   
                                            </div>
                                        </div>
                                    </Link>   
                                )  
                            }
                        })
                        }
                </List>
                <div className='new-chat'>
                    <div className='new-chat-textfield'>
                        <TextField 
                            label="Add chat"
                            variant="outlined"
                            value={this.state.chatName}
                            onChange={(event) =>
                                this.setState({
                                    chatName: event.target.value,
                                })
                            }
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    this.addChat();
                                }
                            }}
                        />
                    </div>
                    <div className='new-chat-button'>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.addChat}>
                            <Add />
                        </IconButton>
                    </div>    
                </div>
                {/* <Button color='primary' variant='contained' onClick={this.addChat}>Добавить чат</Button> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
    messages: state.chat.messages,
    router: state.router.location,
});

/* const mapDispatchToProps = (dispatch) => 
    bindActionCreators({addChat}, dispatch); */

const ChatList = connect(mapStateToProps, {addChat, readMessages, removeChat, loadChats})(_ChatList);

export { ChatList };