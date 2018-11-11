import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';
import ChatInput from './ChatInput.js';


/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
    users: [{ username: 'Amy' }, { username: 'John' }],
  };

  handleAddMsg = msg => {
    this.setState(prevState => ({ messages: prevState.messages.concat([msg]) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <ChatWindow user={this.state.users[0]} messages={this.state.messages}/>

            <ChatInput onAddMsg={this.handleAddMsg} user={this.state.users[0]} msgs={this.state.messages} />
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <ChatWindow user={this.state.users[1]} messages={this.state.messages}/>
            <ChatInput onAddMsg={this.handleAddMsg} user={this.state.users[1]} msgs={this.state.messages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
