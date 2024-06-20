/*Criar o nome da função com o mesmo nome do arquivo em letra maiúscula*/

/*
import Title from "./Title"
Primeiro exercício
function App(){
  return <h1>Eu sou muito abençoada</h1>
}
//Exportação da função para o arquivo main.jsx
export default App
*/

/*Segundo exercício
import Title from "./Title";
function App(){
  //Mais de um componente coloca se as tags dentro de uma div entre parênteses
  return (
    <div>
      <Title/>
      <Title/>
    </div>
  )
}
export default App
*/

/*Terceiro exercício
import Title from "./Title";
function App(){
  return(
    <div>
      <Title/>
      <Title/>
    </div>
  )
}
export default App
*/

/*Quarto exercício
import Title from "./Title";
function App(){
  return (
    <div>
      <Title nome = "Props" />
    </div>
  )
}
export default App
*/

/*Quinto exercício
import Title from "./Title";
function App(){
  return(
    <div>
      <Title nome= "Ana Carolina" test={true}/>
      <Title/>
    </div>
  )
}
export default App
*/

/*Sexto exercício
import Title from "./Title";
function App(){
  return (
    <div>
      <Title color="purple"/>
      <Title color="pink"/>
    </div>
)
}
export default App
*/

/*Sétimo exercício
import Title from "./Title";
function  App(){
  return(
    <div>
    <Title color="pink"/>
    <Title color="blue" />
    </div>
  )
}
export default App
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){
  return (
  <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
        </div>
  )
}
export default App