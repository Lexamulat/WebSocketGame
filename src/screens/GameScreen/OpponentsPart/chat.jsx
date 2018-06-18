import React from 'react';
import ReactDOM from 'react-dom'
import soundManager from 'soundmanager2'

import ioConn from '../../../socket'
import DownBlock from "./supBlock"


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ["start...."],
        }
        ioConn.on("newMessageToClient", (data) => {
        console.log("newMessageToClient")
            
            return this.newMessageFromServer(data.content)
        });
        this.submit = this.submit.bind(this);
    }
    newMessageFromServer(newcontent){
        soundManager.soundManager.play('mySound')
        this.state.messages.push("Opponent: "+newcontent)
        this.setState({
            messages: this.state.messages
            })
}

   
submit(event){
        this.scrollTop = 9999;
        event.preventDefault()
           let message= event.target.elements.input
           ioConn.emit("newMessageFromClient", { content: message.value });
            this.state.messages.push("You :"+message.value)
            message.value=""
    
        this.setState({
        messages: this.state.messages
        })      
}
  
    render() {
        var mes =this.state.messages.map( (item, i)=> {
            return <div className="oneMessage" key={i} >{item}</div>})

        return<div className="chatBlock">
        <div className="messagesBlock">
        {mes}
        <DownBlock/>
        </div>
        <form className="chatInputForm" onSubmit={this.submit}> 
         <input type="text"  className="chatInputField" autoComplete="off"  id="input" placeholder="Enter your message" />
                </form>
        </div>
    }
}


soundManager.soundManager.setup({
    preferFlash: true,
    flashVersion: 9,
    onready: function() {
      console.log("sound")
      soundManager.soundManager.createSound({
        id: 'mySound', 
        url: './1.mp3' 
       });
  
       soundManager.soundManager.play('mySound')
    }
  });


export default Chat


