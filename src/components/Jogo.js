import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import react from "react";
import palavras from "../palavras";
export default function jogo(props) {

  const [tamanho, setTamanho] = react.useState();
  const [array, setArray] = react.useState([]);

  function errados() {
    switch (props.erros) {
      case 0:
        return forca0;

      case 1:
        return forca1;

      case 2:
        return forca2;

      case 3:
        return forca3;

      case 4:
        return forca4;

      case 5:
        return forca5;

      case 6:
        return forca6;

      default:
        return forca6;

    }
  }



  function criarUnderline(n) {
    let underline = [];
    for (let i = 0; i < n; i++) {
      underline[i] = "_ ";
    }
    props.setPalavraescondida(underline);

  }

  function sortandrender() {
    props.setSelecionadas([]);
    props.setErros(0);
    props.setCor('Preto');
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    let arrayDeLetras = palavraAleatoria.split('');
    setTamanho(arrayDeLetras.length);
    setArray(arrayDeLetras);
    props.alteraBotaoLetras(arrayDeLetras);
    criarUnderline(arrayDeLetras.length);
  }

  

  return (
    <div className="upper">
      <div className="forca0">
        <img src={errados()} data-test="game-image"/>
      </div>
      <div className="restartgame">
        <button onClick={() => sortandrender()}  data-test="choose-word">Escolher Palavra</button>
      </div>
      <div className="word" data-test="word">
        <h1 class={props.cor}>{props.palavraescondida}</h1>
      </div>
    </div>
  );
}