import './style.css'
import { useState, useEffect } from 'react'
import RenderizarJogo from './RenderizarJogo'


function Tabuleiro () {

  const [jogador, setJogador] = useState([13, 67]) //posição dos jogadores
  const [indexJogadorSelecionado, setIndexJogadorSelecionado] =  useState(null)
  const [bloqueio, setBloqueio] = useState([-1, 'v'])
  
  useEffect(() => {
    console.log(`jogador - (${indexJogadorSelecionado}) sua posicao: ${jogador[indexJogadorSelecionado]}`)  // aqui o valor de jogador[0] já é o novo
  }, [jogador, indexJogadorSelecionado, bloqueio])//monitona mudanças no estado
  

     return (
        <>
            <RenderizarJogo 
                bloqueio={bloqueio}
                setBloqueio={setBloqueio}
                jogador={jogador}
                setJogador={setJogador}
                indexJogador={indexJogadorSelecionado}
                setIndexJogador={setIndexJogadorSelecionado}
            ></RenderizarJogo>
        </>
    )
}

export default Tabuleiro