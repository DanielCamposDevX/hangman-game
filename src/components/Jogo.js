import forca0 from "./assets/forca0.png"
export default function jogo(){
    return (
        <div class="upper">
            <div class="forca0">
                <img src={forca0} />
            </div>
            <div class="restartgame">
                <button>Escolher Palavra</button>
            </div>
            <div class="word">
                <h1>_ _ _ _ _ _ _ _</h1>
            </div>
        </div>);
}