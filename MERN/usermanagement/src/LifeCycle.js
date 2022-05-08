import React from 'react'

class MyComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            favouritecolor: "red"
        };
    }
    /*
    static getDerivedStateFromProps(props){
        return {favouritecolor: props.favcolor}
    }
    */
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouritecolor: "yellow"})
        },1000) 
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        document.getElementById("div1").innerHTML =
        "The favorite before updated is :" + prevProps.favouritecolor;
        return null;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is :" + this.state.favouritecolor;
        
    }

    render(){
        return(
            <div>
                <br /><br />
            <h1>My favouritecolor is {this.state.favouritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        );
    }

    shouldComponentUpdate(){
        return true;
    }

    
}

export default MyComponent;