import { useState } from "react";

const useCustomCountDown = () => {
    const[count,setCount] = useState(50);
    const handleOnClick = () => {
        setCount(count-1);
    }

    return {
        count,
        handleOnClick
    };
    
}

export default useCustomCountDown;


