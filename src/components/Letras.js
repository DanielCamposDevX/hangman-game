export default function letras() {
  const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let selecionadas = [];
  function seleciona(l) {
    if (selecionadas.length < 3 && !selecionadas.includes(l)) {
      selecionadas.push(l);
      console.log(selecionadas);
    }
    else { }
  }
  return (
    <div class="letras">
      {data.map((letra) =>
        <button
          onClick={() => seleciona(letra)}
          disabled={selecionadas.includes(letra)}
        >
          {letra.toUpperCase()}
        </button>)}
    </div>
  )
}