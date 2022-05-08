import React, { useRef, useEffect } from 'react';
import Input from './Input';

function RefsComponent() {
  const inputOneRef = useRef(null); // creating a refs using hook
  const inputTwoRef = useRef(null);

  useEffect(() => {
    inputOneRef.current.focus();
  }, []);

  const FirstKeyDown = (event) => {
    if (event.key === 'Enter') {
      inputTwoRef.current.focus();
    }
  };

  return (
    <div>
      <Input type="text" onKeyDown={FirstKeyDown} ref={inputOneRef} />
      <Input type="text" ref={inputTwoRef} />
    </div>
  );
}
export default RefsComponent;
