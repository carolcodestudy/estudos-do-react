/*Primeira função criada
function Title(){
    let name  = "Ana Carolina"
    let imgURL = "src/assets/react.svg"
    return (
        <div>
            <h1>Olá eu sou {name}</h1>
            <img src= {imgURL} alt="logo-react" width={50}/>
        </div>
    )
}

export default Title
//Props -> atributos das tags(sem ser estilização) pode ser passado funções,objetos,etc.*/

/*Segunda função
function Title({nome}){
    return (
        <div>
            <h1>Segunda função {nome}</h1>
        </div>
    )
}
export default Title*/

/*Terceira função com valor ternário
function Title({nome , test}) {
    return (
        <div>
            <p>Nome: {nome ? nome : "Gabrielle"}</p>
            {test ? <p>Resultado verdadeiro</p> : <p>Resultado falso</p>}
        </div>
    )
}
export default Title*/

/*Quarta função passando um objeto para personalizar os textos
function Title({color}){
    return(
        <div>
            <p style={{color}}>Eu sou a Carol!</p>
            <p style={{color}}>Eu tenho 24 anos de idade.</p>
        </div>
    )
}
export default Title
*/

/*Quinta função
//Estado de memória interna
import { useState } from "react"
function Title({color}){
    const [texto, setTexto] = useState("Título estado inicial")
    return(
        <div>
            <p style={{color: color}}>{texto}</p>
            <button onClick={()=>{
                setTexto("Novo texto")
            }}>Change</button>
        </div>
    )
}
export default Title
*/

/*Sexta função
import { useState } from "react";
function Title(color){
    const [texto, setTexto] = useState("Digite algo")
    const [value, setValue] = useState("")

    function Click (){
        setTexto(value)
    }
    
    return(
        <div>
            <p style={{color: color}}>{texto}</p>
            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
            }} />
            <button onClick={Click}>Change</button>
        </div>
    )
}
export default Title
*/
//Single Page Application. Assunto a ver com rotas. Parei em 50:00