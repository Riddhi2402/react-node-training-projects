import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
/*
const App = (props) => {
  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      <h2>Your RollNo: {props.roll}</h2>
    </div>
  );
}
*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Riddhi",
      roll: this.props.roll
    }
  }

  handleClick = () => {
    this.setState({name: "Charmi"});
    this.setState((state,props) => {
      return {
        roll: state.roll + props.increment
      };
    })
  }

  render(){
    return(
      <div className="App">
      <h1>Hello {this.state.name}</h1>
      <h2>Your RollNo: {this.state.roll}</h2>
      <button onClick={this.handleClick}>Click</button>
    </div>
    );
  }
}




App.propTypes = {
  name: PropTypes.string
};
export default App;
