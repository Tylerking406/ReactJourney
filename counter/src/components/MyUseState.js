import React, { useState } from 'react';
import './styles.css';
const MyUseState = () => {
    const [counter, setCounter] = useState(0);

    //increment function
    const increment = () => {
        if(counter< 20)
            setCounter(counter+1)
        else
            window.alert("20 is our upper bound")
    }

    //decrement function
    const decrement =()=>{
        if( counter >0)
            setCounter(counter-1)
        else
       window.alert("Why do you wanna count down to negative numbers?")
    }
    
    //reset function
    const reset =()=>{
        setCounter(0)
    }
  return (
    <div>
        {counter}
        <button onClick={ increment}>Increment</button>
        <button onClick={ decrement}>Decrement</button>
        <button onClick={ reset}>Reset</button>
        

    </div>
  )
}

export default MyUseState