import React from 'react';
import ioConn from '../socket'

class WaitingScreen extends React.Component {
    constructor(props) {
        super(props)
        ioConn.on("seting", (data) => {
            return this.changeAfter(data.seturl)
        });
        // ioConn.on("seting", (data) => {
        //     return this.changeAfter(data.seturl)
        // });
        this.state = {
            curr: "while",
            url: ""

        }

        this.displayWaitingScreen = this.displayWaitingScreen.bind(this);
    }
handleChange(){}
    changeAfter(urlFromWs) {
        this.setState({
            curr: "after",
            url: urlFromWs
        })
    }

    displayWaitingScreen() {
   
        return (
            <div className="waitngScreen">
                <form className="linkBlock">
                    <p className="waitingText" ><strong>Link for your opponent</strong></p>
                    <p><input className="waitingInput"  value={document.location.href+"#"+ioConn.io.engine.id || ''} onChange={this.handleChange} /></p>
                </form>
                <div className="windows8">
	                 <div className="wBall" id="wBall_1">
		            <div className="wInnerBall"></div>
	                </div>
	                <div className="wBall" id="wBall_2">
		             <div className="wInnerBall"></div>
	                    </div>
	                <div className="wBall" id="wBall_3">
		            <div className="wInnerBall"></div>
	                </div>
	                <div className="wBall" id="wBall_4">
		            <div className="wInnerBall"></div>
	                </div>
	                <div className="wBall" id="wBall_5">
		            <div className="wInnerBall"></div>
	              </div>
             </div>
         </div>
        )
    }



    render() {
            return this.displayWaitingScreen()
    }
}

export default WaitingScreen;