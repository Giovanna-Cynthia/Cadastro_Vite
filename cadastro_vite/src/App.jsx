import Form from "./Components/Form";
import Header from "./Components/Header";
import Rodape from "./Components/Rodape";

// Define um componente funcional
function App() {


  return (
    // Fragmento React para agrupar elementos sem adicionar elementos extras ao DOM
   <>
   {/*Chama os componentes, para que ele apareça na tela principal*/}
   <Header/>
   <Form titulo="Cadastro de ADM" subTitulo="Garanta que todos os campos estejam preenchidos"/>   
   <Rodape/>
   </>
  )
}

export default App
