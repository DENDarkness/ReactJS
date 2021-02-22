// import React from 'react';

const Messages = (props) => {
    const { messages = ['Нормально'] } = props;

    return (
        <div className='messages'>
            {messages.map((item, index) => (
                <Message key={index} text={item} />
            ))}
        </div>
    );
};

const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export { Messages };