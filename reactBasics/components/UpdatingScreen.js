import { useState } from "react"
function UpdatingScreen()
{
    const [count,setCount]=useState(0);
    function handleClick1()
    {
        setCount(count+1);
    }
   return(
        <>
         <button onClick={handleClick1}> Add {count}</button>
       
        </>
        
       
    );
}
export default UpdatingScreen;