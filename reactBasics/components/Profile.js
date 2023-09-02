function Profile()
{
    return(
        <>
        <img src="logo512.png" alt="react-logo"/>
        </>
    )
}
export default function Gallery()
{
    return(
        <>
        <section>
            <h1>Amazing logos</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
        </>
    )
}