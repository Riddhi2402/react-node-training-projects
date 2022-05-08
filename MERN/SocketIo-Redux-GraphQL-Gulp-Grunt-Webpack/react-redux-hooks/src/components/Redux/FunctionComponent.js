import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../Redux/Actions';

const FunctionComponent = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>With Redux-Hook</h2>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(incrementCounter(counter))}>INCREMENT</button>
      <button onClick={() => dispatch(decrementCounter(counter))}>DECREMENT</button>

    </div>
  );
};

export default FunctionComponent;
