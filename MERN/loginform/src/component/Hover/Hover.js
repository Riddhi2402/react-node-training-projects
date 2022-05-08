import React, { useState } from 'react';
import { Text } from '../../Assets/constant';


const Hover = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button  onMouseEnter={() => setIsShown(true)} onMouseLeave={() =>setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && <div>{Text.hoverMessage}</div>}
    </div>
  );
};

export default Hover;
