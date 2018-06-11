import React from 'react'
import PlayerScreen from './PlayersPart/PlayerScreen'
import Chat from './OpponentsPart/chat'
import OpponentsCard from './OpponentsPart/OpponentsCard'


class GameScreen extends React.Component {
    render() {
        return (
        <div>
            <div className="main">
                <div className="left">
                    <PlayerScreen />
                </div>
                
                <div className="right">

                <div className="opponentsCard "><OpponentsCard/></div>
                    <Chat />
                </div>
            </div>
            
        </div>
        )
    }
}

export default GameScreen

{/* <div className="opponentsCard "><p >opponentsCard</p></div> */}
