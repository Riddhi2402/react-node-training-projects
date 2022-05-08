import React from 'react'
import FormattedDate from './FormatDate.js'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Date is: {this.state.date.toLocaleTimeString()}</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;