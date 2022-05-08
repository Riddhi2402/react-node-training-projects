import React from 'react';
import { connect } from 'react-redux';
import { decrementCount, incrementCount } from '../../Redux/Actions';

class ClassComponent extends React.Component {
  render() {
    const count = this.props.count;
    return (
      <div>
        <h2>Redux -without -Hook</h2>
        <h1>Count:{count}</h1>
        <button onClick={() => this.props.increment(count)}>INCREMENT</button>
        <button onClick={() => this.props.decrement(count)}>DECREMENT</button>
      </div>
    );
  }
}

//mapStateToProps
function mapStateToProps(state) {
  const count = state.counterReducer.count;
  return {
    count,
  };
}

//mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return {
    increment: (count) => dispatch(incrementCount(count)),
    decrement: (count) => dispatch(decrementCount(count)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
