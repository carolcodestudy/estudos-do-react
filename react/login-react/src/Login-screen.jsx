/*Arquivo que contém os componentes*/
function Login(){
    return (
        <div id="login">        
                <h1>mini game <i className="bi bi-rocket-takeoff"></i></h1>
                <form action="#" method="post" role="form">
                    <input type="text" id="input-user" name="user" minLength={2} maxLength={200} placeholder="Nickname or E-mail" aria-label="Please put your Nickname or E-mail" required/> <br />
                    <input type="password" id="input-password" name="password" minLength={3} maxLength={16} placeholder="Password" aria-label="Please put your password" required/>
                    <button type="button" id="button" aria-label="Click the button to enter the game">Go</button>
                </form>            
        </div>
    )
}

export default Login