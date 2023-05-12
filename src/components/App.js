import "./App.css";
import Jogo from "./Jogo";
import Letras from "./Letras"

export default function App() {
  return (
    <div class="App">
      <Jogo />
      <div class="container">
        <Letras />
      </div>
    </div>
  );
}
