import React from 'react';
import ReactDOM from 'react-dom'

class DownBlock extends  React.Component {
    componentDidMount() {
      this.scrollToBottom();
    }
  
    componentDidUpdate() {
      this.scrollToBottom();
    }
  
    scrollToBottom() {
      this.el.scrollIntoView({ behaviour: 'smooth' });
    }
  
    render() {
      return <div ref={el => { this.el = el; }} />
    }
  }

  export default DownBlock