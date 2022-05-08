import React from 'react'


class EventHandler extends React.Component{

    shoot = (b) => {
        alert(b.type);
    }
    
    render(){
        return(
            <div>
            <button onClick={(ev) => {this.shoot(ev)}}>Click</button>
            </div>
        );
    }
}

export default EventHandler;