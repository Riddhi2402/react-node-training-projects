import React, {useEffect, useState} from 'react'
import LoginForm from '../Loginform/index'
import ClipLoader from "react-spinners/ClipLoader";
import override from './style';
import { text } from '../../Assets/constant';


const Splash = () => {

    const[show,setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        },5000)
      },[show])
    
    if(show === false){
        return(

            <div id="splash">
             <ClipLoader
             loading={true}
             css={override}
             size={150} />
            </div>    
            )
    }else{
        return(
            <LoginForm/>
        )
        
    }
    
}

export default Splash;