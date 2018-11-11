import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatInput extends Component {
  state = {
     msg: '',
  }
  
  isDisabled = () => {
    return false;
  };

  submitMsg = event => {
    event.preventDefault();
    
    const newMsg = {
       ['username']: this.props.user.username,
       ['text']: this.state.msg,
    };
    this.props.onAddMsg(newMsg);
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      msg: value,
    })); 
  }
  
  render() {
    return (
      <div>
              <form className="input-group" onSubmit={this.submitMsg}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.msg} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
      
    );
  }
  
}

ChatInput.propTypes = {
  onAddMsg: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default ChatInput;