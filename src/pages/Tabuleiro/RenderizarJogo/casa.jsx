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

  function buscarMovPosi() {
    /*
    props.movPosi.forEach(function(posicao, i){
      if(props.posicao == posicao) {
        return true
      }
    })*/
   let encontrou = false

    props.movPosi.forEach(function (posicao, index) {
      if(props.posicao == posicao) {
        encontrou =  true
      }
    })

    return encontrou
  }

  function moverJogador(){
    if(buscarMovPosi()) {
      //atualizar a poiscao do jogador 
      let newJogadores = [...props.jogador]
      newJogadores[props.indexJogador] = props.posicao
      props.setJogador(newJogadores)

      
      //resetar o index De jogador selecionado
      props.setIndexJogador(null)
      console.log(props.indexJogador)
      console.log('RESETOU INDEX JOGADOR')
    }
  }

  function converterCartesiano(i){
    let xy = []

    xy[0] = i%9
    xy[1] = (i - (i%9))/9

    return (xy)
}

  function converterLinear(i){ //xy[0, 0]
    let valorLinha

    if(Array.isArray(i)) {
      valorLinha= i[y]*9 + i[0]
    }

    return valorLinha
  }

  function MovimentosPossiveis() {
    let movPosi = []
    let xy = converterCartesiano(props.posicao)
    
    movPosi.push(xy[1]*9 + xy[0] -1)
    movPosi.push(xy[1]*9 + xy[0] +1)
    movPosi.push((xy[1]-1)*9 + xy[0])
    movPosi.push((xy[1]+1)*9 + xy[0])

    console.log(`movimentps possiveis: ${movPosi}`)
    props.setMoviPosi(movPosi)
    
    //return movPosi
  }

  function clickCasa() {
    //se a casa não estiver sendo ocupada por nenhum jogador
    //move o jogador da vez para a casa clicada
    if(
      props.posicao != props.jogador[props.indexJogador] 
      && props.posicao != props.jogador[1 - props.indexJogador]
      && props.indexJogador != null) {

        /*
      //atualizar a poiscao do jogador 
      let newJogadores = [...props.jogador]
      newJogadores[props.indexJogador] = props.posicao
      props.setJogador(newJogadores)
      */
     moverJogador()

    } else if (props.indexJogador === null 
        && classe == 'j1') {
        
        MovimentosPossiveis()
        props.setIndexJogador(0)
        console.log('Jogador1')
    
    } else if(props.indexJogador === null 
                && classe == 'j2') {
      MovimentosPossiveis()
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
