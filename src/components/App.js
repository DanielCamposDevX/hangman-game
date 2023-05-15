import "./App.css";
import Jogo from "./Jogo";
import Letras from "./Letras";
import react from "react";

export default function App() {
  const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [selecionadas, setSelecionadas] = react.useState([]);
  const [botaoClicado, setBotaoClicado] = react.useState(false);
  const [arrayDeLetras, setArrayDeLetras] = react.useState();
  const [palavraescondida, setPalavraescondida] = react.useState();
  const [erros,setErros] = react.useState(0);
  const [cor,setCor] = react.useState('Preto');


  function alteraBotaoLetras(array) {
    setBotaoClicado(true);
    setArrayDeLetras(array);
  }

  return (
    <div class="App">
      <Jogo alteraBotaoLetras={alteraBotaoLetras} setPalavraescondida={setPalavraescondida} palavraescondida={palavraescondida} selecionadas={selecionadas} setSelecionadas={setSelecionadas} erros={erros} setErros={setErros} cor={cor} setCor={setCor}/>
      <div class="container">
        <Letras botaoClicado={botaoClicado} array={arrayDeLetras} setPalavraescondida={setPalavraescondida} palavraescondida={palavraescondida} data={data} selecionadas={selecionadas} setSelecionadas={setSelecionadas} erros={erros} setErros={setErros} cor={cor} setCor={setCor}/>
      </div>
    </div>
  );
}
