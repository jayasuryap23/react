function MyButton1()
{

    function handleClick()
    {
        alert('you clicked me ');
    }
    return(
        <>
        <br></br>
      <button onClick={handleClick}>Click Me</button>

        </>

    )
}
export default MyButton1;