import { useEffect, useRef, useState } from 'react'
import './style.css'
import jogador1 from '../../assets/jogador1.png'
import jogador2 from '../../assets/jogador2.png'


function Jogo() {
    let lacunas
    let casas
    let centros 
    let jogadores //= document.querySelectorAll('.jogador')

    const [casaSelecionada, setCasaSelecionada] = useState()
    
    const [centroSelecionado, setCentroSelecionado] = useState()
    const [jogadorSelecionado, setJogadorSelecionado] = useState()
    
    useEffect(() => {
        console.log('Estado atualizado');
      }, [casaSelecionada], [jogadorSelecionado], [centroSelecionado]);

    useEffect(() => {
        lacunas = document.querySelectorAll('.lacuna')
        casas = document.querySelectorAll('.casa')
        centros = document.querySelectorAll('.centro')
        jogadores = document.querySelectorAll('.jogador')
    }, [])

    function clickJogador(newJogador) {
        console.log("clicou no jogador")
       
        setJogadorSelecionado(prevJogadorSelecionado => ({
            ...prevJogadorSelecionado,
            jogador: newJogador,
        }));

        console.log('jogadorSelecionado', jogadorSelecionado)
    }

    function clickCasa(newCasa){
        console.log('clicou na casa', newCasa)
        setCasaSelecionada({ casaSelecionada: newCasa})

        if(newCasa.querySelector('.jogador') == null) {
            newCasa.appendChild(jogadorSelecionado)
        }
    }

    return (
        <div className="container">
            <table>
                <tr className='trChegada'>
                    <td className='casa' onClick={(e) => clickCasa(e.currentTarget)}></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa' onClick={(e) => clickCasa(e.currentTarget)}></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa' onClick={() => clickCasa(this)}></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa' onClick={() => clickCasa(this)}>  
                            <img className='jogador' src={jogador1} onClick={() => clickJogador(this)}></img>                  
                    </td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'>                    
                    </td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'>                    
                    </td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'> 
                    <img className='jogador' src={jogador2} onClick={() => clickJogador(this)}></img>                  
                    </td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                    <td className="centro"></td>
                    <td className='lacunaH lacuna'></td>
                </tr>
                <tr className='trChegada'>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className='casa'></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                    <td className='lacunaV lacuna'></td>
                    <td className="casa"></td>
                </tr>
            </table>
        </div>
    )
}
export default Jogo