import { Component } from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './chat-list.css';
import { Layout } from '../Layout';

class ChatList extends Component {

    state = {
        chats: ['chat 1', 'chat 2', 'chat 3'],
        chatName: '',
    };

    addChat = () => {
        this.setState({
            chats: [...this.state.chats, this.state.chatName],
            chatName: '',
        });
    };

    render() {
        return (
            <div className='chat-list'>
                <List>
                    {this.state.chats.map((chat, index) =>(
                        <Link key={index} to={`/chat/${index}`}>
                                <ListItem button>
                                    <div className='chat-list__list'>
                                        <li className=''>
                                            {chat}
                                        </li>
                                    </div>
                                </ListItem>
                        </Link>                       
                    ))}
                </List>
                <div className='new-chat'>
                    <TextField value={this.state.chatName}
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
                <Button color='primary' variant='contained' onClick={this.addChat}>Добавить чат</Button>
            </div>
            </div>
        );
    }
}

export { ChatList };