import react from 'react';

export default function letras(props) {
  const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [selecionadas, setSelecionadas] = react.useState([]);
  let erros = 0;
  

  function seleciona(letra) {
  
      let palavra = props.array;
      setSelecionadas([...selecionadas, letra]);
      console.log(selecionadas);
      
      if (palavra.includes(letra)){
         
      }
      else{}
    
    }
  return (
    <div class="letras">
      {data.map((letra) =>
        <button
          onClick={() => seleciona(letra)}
          disabled={!props.botaoClicado ||selecionadas.includes(letra)}
        >
          {letra.toUpperCase()}
        </button>)}
    </div>
  )

}