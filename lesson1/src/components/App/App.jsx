import { Messages } from '../Messages';

const App = () => {
    // return React.createElement('div', { id: 'test-id' }, 'Hello from React');
    return (
        <div id='test-id'>
            <h2>Hello from React</h2>
            <Messages messages={['First', 'second']} />
            {/* <Message text='My other message' /> */}
        </div>
    );
};

// export default App;
export { App };