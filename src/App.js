import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
// import Conteudo from './componentes/Conteudo';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login'


/*arquivo app JSX
componente funcional*/
function App() {
  /*todo componente deve retornar um html  */
  return (
    /*O react susbtitui classname por class pq class é palavra reservada do js*/
    <>
    <Cabecalho logo="barbie.png" titulo="BARBIE" />
    {/* <Conteudo/> */}
    <Cadastro/>
    <Login/>
    <Rodape />
    </>
  );
}

export default App;
