import React, {useState, useEffect, useContext} from 'react'
import useCustomCountDown from './CustomHook';


function HookExample(){
    //useState
    const[count,setCount] = useState(0);
    const[subjects,setSubjects] = useState([]);
    const[userDetail,setValue] = useState({id: 0,firstname: "",lastname: "",contactno: 0});
    //useEffect
    useEffect(() => {
        console.log("useEffect is called..");
    },[subjects]);

    //customHook
    const data = useCustomCountDown();

    //useContext
    const context = React.createContext("This is Context..");
    const myContext = useContext(context);

    
    return(
        <div>
            <br />
            <h3>Using Hook</h3>
            <h3>you click {count} time.</h3>
            <button onClick={() => {setCount(count + 1)}}>Clickme</button>
            <h4>Subjects: {subjects}</h4>
            <button onClick={() => {setSubjects(["sub3","sub4"])}}>ChangeSubject</button>
            <h3>Your Count: {data.count}</h3>
            <button onClick={() => {data.handleOnClick()}}>CountDown</button>
            <br /><br /><h4>{myContext}</h4>

            <h3>{userDetail.id},{userDetail.firstname},{userDetail.lastname},{userDetail.contactno}</h3>   
            <button onClick={() => {setValue({id: 1,firstname: "Riddhi",lastname: "Pethani",contactno: 9876543210})}}>Clickme</button>
            <button onClick={() => {setValue({contactno:1234567890})}}>Clickme</button>
        </div>  
    );
}

export default HookExample;