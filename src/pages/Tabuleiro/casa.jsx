import './style.css'

function Casa(props) {
  // Decide se a casa tem um jogador
  let classe = ''
  if (props.posicao === props.jogador[0]) {
    classe = 'j1'
    //props.setIndexJogador(0)
    }
  else if (props.posicao === props.jogador[1]) {
    classe = 'j2'
    //props.setIndexJogador(1)
  }

  function clickCasa() {
    if(props.posicao != props.jogador[props.indexJogador] 
      && props.posicao != props.jogador[1 - props.indexJogador]
      && props.indexJogador != null) {
      //atualizar a poiscao do jogador 
      let newJogadores = [...props.jogador]
      newJogadores[props.indexJogador] = props.posicao
      props.setJogador(newJogadores)
      //resetar o index De jogador selecionado
      props.setIndexJogador(null)
      console.log(props.indexJogador)
      console.log('RESETOU INDEX JOGADOR')

    } else if (props.indexJogador === null 
                && classe == 'j1') {
      props.setIndexJogador(0)
      console.log('Jogador1')
    
    } else if(props.indexJogador === null 
                && classe == 'j2') {
      props.setIndexJogador(1)
      console.log('Jogador2')
    } 
    console.log(`clicou na casa posicao: ${props.posicao}`)
    /*
    console.log(`posi atual jogador: ${props.jogador[props.indexJogador]}`)
    console.log(`index do jogador selecionado: ${props.indexJogador}`)
    */
    }

  return (
    <td
      className={`casa ${classe}`}
      onClick={clickCasa}
    ></td>
  )
}

export default Casa
