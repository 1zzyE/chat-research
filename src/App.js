import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import "./style.css";


function Title() {
  return <p class="title">My Awesome Chat App</p>
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList />
        <SendMessageForm />
     </div>
    )
  }
}

export default App;