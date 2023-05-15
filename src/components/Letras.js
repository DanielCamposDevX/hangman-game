import react from 'react';

export default function letras(props) {
  
  function comparaArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }


  function seleciona(letra) {

    let palavra = props.array;
    props.setSelecionadas([...props.selecionadas, letra]);
    console.log(letra);
    let escondida = [...props.palavraescondida];
    if (palavra.includes(letra)) {
      console.log('Acertou')
      for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
          escondida[i] = letra
        }
      }
      props.setPalavraescondida(escondida)
      if (comparaArrays(palavra, escondida)) {
        console.log('Você ganhou!')
        props.setCor('Verde')
      }
    }
    else {
      console.log('Errou');
      const numErros = props.erros + 1;
      props.setErros(numErros);
      if (numErros > 5) {
        props.setSelecionadas(props.data);
        props.setPalavraescondida(palavra);
        props.setCor('Vermelho');
      }
    }

  }
  return (
    <div class="letras">
      {props.data.map((letra) =>
        <button
          onClick={() => seleciona(letra)}
          disabled={!props.botaoClicado || props.selecionadas.includes(letra)}
          data-test="letter">
          {letra.toUpperCase()}
        </button>)}
    </div>
  )

}