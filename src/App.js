import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';


/*arquivo app JSX
componente funcional*/
function App() {
  /*todo componente deve retornar um html  */
  return (
    /*O react susbtitui classname por class pq class é palavra reservada do js*/
    <>
    <img src='logo.png' alt='logotipo'></img>
    <Cabecalho titulo="fav.io" subtitulo="o melhor num sei oq la"/>
    <Rodape/>
    </>
  );
}

export default App;
