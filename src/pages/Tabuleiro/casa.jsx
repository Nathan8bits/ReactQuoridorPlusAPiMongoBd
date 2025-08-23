import './style.css'

function Casa(props) {
  // Decide se a casa tem um jogador
  let classe = ''
  if (props.posicao === props.jogador[0]) classe = 'j1'
  else if (props.posicao === props.jogador[1]) classe = 'j2'

  function clickCasa() {
    let newJogadores = [...props.jogador]
    newJogadores[props.indexJogadorSelecionado] = props.posicao
    props.setJogador(newJogadores)
    console.log(`clicou na casa: ${props.index}, posicao: ${props.posicao}`)
  }

  return (
    <td
      className={`casa ${classe}`}
      onClick={clickCasa}
    ></td>
  )
}

export default Casa
