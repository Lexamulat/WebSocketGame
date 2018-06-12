import React from 'react';
import ReactDOM from 'react-dom'
import ioConn from '../../../socket'


class OpponentsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        waitingForCardId:true
        }
        ioConn.on("opponentChooseTheCard", (data) => {
                  return this.changeCard()
                })
    }
    componentWillMount(){
        this.displayUnknownCard()
    }

    changeCard(){
        this.setState({
            waitingForCardId:!this.state.waitingForCardId
            })
    }

    displayThisCard(){
        return <div className="cardFrame"> <div className="greencard"></div>
        </div> 
    }
    
    displayUnknownCard(){
      return <div className="cardFrame">  <div id="floatingBarsG">
    	<div className="blockG" id="rotateG_01"></div>
    	<div className="blockG" id="rotateG_02"></div>
	    <div className="blockG" id="rotateG_03"></div>
	    <div className="blockG" id="rotateG_04"></div>
	    <div className="blockG" id="rotateG_05"></div>
	    <div className="blockG" id="rotateG_06"></div>
	    <div className="blockG" id="rotateG_07"></div>
	    <div className="blockG" id="rotateG_08"></div>
    </div>
    </div>
    }

  
    render() {
        
        if(this.state.waitingForCardId==true){
          return  this.displayUnknownCard()
        }else{
           return this.displayThisCard()
        }
      
    }
}


export default OpponentsCard


