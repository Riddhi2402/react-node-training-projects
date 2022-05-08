import { createElement as e } from "react";

function App(props) {
  return e('div', null, [
    e('h1', {key:'hello'}, `Hello ${props.toWhat}`),
    e('ul', {key:'list'}, [e('li', { key: 'item1' }, 'list-item1'), e('li', { key: 'item2' }, 'list-item2')]),
  ]);
}

export default App;
