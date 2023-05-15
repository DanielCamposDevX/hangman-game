import "./App.css";
import Jogo from "./Jogo";
import Letras from "./Letras"
import react from "react";

export default function App() {

  const [botaoClicado, setBotaoClicado] = react.useState(false);
  const [arrayDeLetras,setArrayDeLetras] = react.useState();
  const [palavra,setPalavra] = react.useState();


  function alteraBotaoLetras(array) {
    setBotaoClicado(true);
    setArrayDeLetras(array);
  }

  return (
    <div class="App">
      <Jogo alteraBotaoLetras={alteraBotaoLetras} />
      <div class="container">
        <Letras botaoClicado={botaoClicado}  array={arrayDeLetras}/>
      </div>
    </div>
  );
}
