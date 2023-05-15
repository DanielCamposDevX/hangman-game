import "./App.css";
import Jogo from "./Jogo";
import Letras from "./Letras"
import react from "react";

export default function App() {

  const [botaoClicado, setBotaoClicado] = react.useState(false);
  
  function alteraBotaoLetras() {
    setBotaoClicado(true);
  }

  return (
    <div class="App">
      <Jogo alteraBotaoLetras={alteraBotaoLetras} />
      <div class="container">
        <Letras botaoClicado={botaoClicado} />
      </div>
    </div>
  );
}
