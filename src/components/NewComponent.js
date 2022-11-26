import React from "react";
import ".././App.css";
import BellA from "./images/BellA.png";
import BellB from "./images/BellB.png";

class NewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            message:"Hey, Subscribe for more content",
            buttonText:"Subscribe",
            imageURL:BellA

        }
    }

    Buttonfunction = () => {
        this.setState({
            message:"Click the bel icon to never miss an update",
            buttonText:"Subscribed",
            imageURL:BellA
        })
    }

    Imagefunction = () => {
        this.setState({
            message:"Thank you!",
            imageURL:BellB
        })
    }
    styles ={
        color:"purple",
        fontStyle:"italic"
    }
    render(){
        return(
            <div className="App">
                <h3 style ={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonfunction}>{this.state.buttonText}</button>
                <p />
                <img style={{width:"30px", height:"30px"}} onClick={this.Imagefunction} src={this.state.imageURL} alt="" />
            </div>
        );
    }
}

export default NewComponent;