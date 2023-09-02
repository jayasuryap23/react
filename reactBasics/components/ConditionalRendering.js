
function ConditionalRendering()
{
    let content;
    let isLoggedIn=true;
    if(isLoggedIn)
    {
        content =<AdminPanel/>
    }
    else
    {
        content=<LoginFForm/>
    }
    return(
        <div>
            {content}
        </div>

    );
    // {isLoggedIn?(<AdminPanel>):(<LoginForm/>)}

}
export default ConditionalRendering;
function AdminPanel()
{
    return(
        <>
        <h2>this is AdminPanel
        </h2>
        </>
    )
}
function LoginFForm()
{
    return(
        <>
        <h2>this is about login page </h2>
        </>
    )
}

