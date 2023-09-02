function Button({onClick,children})
{
    return(
        <>
        <button onClick={onClick}>{children}</button>
        </>
    );
}
function PlayButton({moviename})
{
    function handlePlayClick()
    {
        alert(`playing ${moviename}`);
    }
    return(
        <Button onClick={handlePlayClick}>play "{moviename}"</Button>
    );
}
function UploadButton()
{
    return(
        <Button onClick={()=> alert('uploading')}>upload image </Button>
    );
}
export default  function Toolbar()
{
    return(
        <div>
            <PlayButton moviename="kiki delivery service "/>
            <UploadButton/>
        </div>
    );

}

/* function AlertButton ({message,children})
{
    return(
        <button onClick={()=> alert(message)}>{children}</button>

    )
}
export default function Toolbar()
{
    return(
        <div>
            <AlertButton message="playing"> Play Movie</AlertButton> 
            <AlertButton message=" Uploading">Upload Image
            </AlertButton>
        </div>
    )
} */