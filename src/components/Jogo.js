import forca0 from "./assets/forca0.png"
import react from "react";
import palavras from "./palavras";
export default function jogo(props) {

    const [tamanho, setTamanho] = react.useState();

    function criarUnderline(n) {
        let underline = "";
        for (let i = 0; i < n; i++) {
            underline += "_ ";
        }
        return underline;
    }

    function sortandrender() {
        const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        let arrayDeLetras = palavraAleatoria.split('');
        let n = arrayDeLetras.length;
        setTamanho(n);
        console.log(arrayDeLetras);
    }



    return (
        <div class="upper">
            <div class="forca0">
                <img src={forca0} />
            </div>
            <div class="restartgame">
                <button onClick={() => { props.alteraBotaoLetras(); sortandrender(); }}>Escolher Palavra</button>
            </div>
            <div class="word">
                <h1>{criarUnderline(tamanho)}</h1>
            </div>
        </div>);
}