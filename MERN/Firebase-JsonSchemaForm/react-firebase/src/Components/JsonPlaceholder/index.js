import React, { useEffect, useState } from 'react';

function TodoList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <div>
      <ul>{data && data.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
}

export default TodoList;
