import React from 'react';
import ReactDOM from 'react-dom'

import ioConn from './socket'

import WaitingScreen from "./screens/waitingScreen"
import GameScreen from "./screens/GameScreen/GameScreen"





class ScreenManager extends React.Component {
  constructor(props) {
    super(props)

   
    ioConn.on("gameStart", (data) => {
console.log("game is start")
      return this.changeSreenToGame()
    })
    ioConn.on("incorrectId", (data) => {
      return this.notification(data.content)
  });

    this.state = {
      screen: "wait"
    }
    this.changeSreenToGame = this.changeSreenToGame.bind(this);
  }
  componentWillMount(){

    this.isThisAnInvitedPerson()
  }
notification(data){
  alert(data)
}


  dispWaitScreen() {
    return (
      <WaitingScreen />
    )
  }

  dispGameScreen() {
    return (
      <GameScreen />
    )
  }

  press(info){
    this.setState({
      screen: "game"
    })
}

  
  
  changeSreenToGame() {
    this.setState({
      screen: "game"
    })
  }

  

  isThisAnInvitedPerson(){
    var str = document.location.href.substr((document.location.href.lastIndexOf("/")) + 1)
    console.log(document.location.href)
    if (str!==""){
      ioConn.emit("addMeInPair", { opponenturl: str.substr(1) });
    }
    
  }

  render() {

    if (this.state.screen == "wait") {
      return this.dispWaitScreen()
    } else {
      return this.dispGameScreen()
   
    }
  }
}




// console.log(document.location.href)







ReactDOM.render(
  <ScreenManager />,
  document.getElementById("root")
)

console.log('My Minimal 01322dddddddddddooooooo');
module.hot.accept();