import forca0 from "./assets/forca0.png"
import react from "react";
import palavras from "./palavras";
export default function jogo(props) {

    const [tamanho, setTamanho] = react.useState();
    const [array, setArray] = react.useState([]);
    const [palavra, setPalavra] = react.useState();
  
    function criarUnderline(n) {
      let underline = "";
      for (let i = 0; i < n; i++) {
        underline += "_ ";
      }
      setPalavra(underline);
    }
  
    function sortandrender() {
      const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
      let arrayDeLetras = palavraAleatoria.split('');
      setTamanho(arrayDeLetras.length);
      setArray(arrayDeLetras);
      props.alteraBotaoLetras(arrayDeLetras);
      console.log(arrayDeLetras);
      criarUnderline(arrayDeLetras.length);
    }
  
    return (
      <div className="upper">
        <div className="forca0">
          <img src={forca0} alt="Forca" />
        </div>
        <div className="restartgame">
          <button onClick={() => sortandrender()}>Escolher Palavra</button>
        </div>
        <div className="word">
          <h1>{palavra}</h1>
        </div>
      </div>
    );
  }