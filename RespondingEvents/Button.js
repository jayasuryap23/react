export default function Button()
{
    function handleClick()
    {
        alert(" you clicked me ");
    }
    return(
        <>
                <button className="btn1" onClick={handleClick}> Click Me</button>
                <br/>
                <br/>
                <br/>

                <button id="btn" onClick={function handleClick2(){alert(" welcome")}}>add</button>
                <br/>
                <br/>
                <br/>
                <button onMouseOut={()=>
                {
                   const btn= document.getElementById('btn');
                   btn.style.backgroundColor='red';
                }}>Using Arrow function </button>
                 <br/>
                <br/>
                <br/>

        </>

        
    )
}