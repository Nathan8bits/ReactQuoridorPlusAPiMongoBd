import './style.css'
import jogador1 from '../../assets/jogador1.png'
import { useState, useEffect } from 'react'
import Casa from './casa'
import LacunaV from './lacunaV'
import LacunaH from './lacunaH'
import Centro from './centro'
import Peca from './peca'

function Tabuleiro () {

  const [jogador, setJogador] = useState([13, 67]) //posição, t
  const [indexJogadorSelecionado, setIndexJogadorSelecionado] =  useState(0)
  
  useEffect(() => {
  console.log(`jogador - (${indexJogadorSelecionado}) 
      sua posicao: ${jogador[indexJogadorSelecionado]}
      `)  // aqui o valor de jogador[0] já é o novo
  }, [jogador, indexJogadorSelecionado])//monitona mudanças no estado
  

  const [movPosi, setMovPosi] = useState()

  let qntddCasas = -1

     return (
       <>
       <div className="container">
        <table>
          <tr className="trChegada">
            {Array.from({length: 9}, (_, i) => {
              qntddCasas++
                return (
                  <>
                    <Casa 
                      index={`${i} - casa`} 
                      posicao={qntddCasas} 
                      jogador={jogador} 
                      setJogador={setJogador} 
                      indexJogador={indexJogadorSelecionado}
                      setIndexJogador={setIndexJogadorSelecionado}></Casa>
                    {i < 8 && <LacunaV index={`${i} - lacunaV`} tipo={'v'}></LacunaV>}
                  </>
                )
            })}
          </tr>

          {Array.from(({length: 7}), (_, linha) => (
            <>
              <tr key={`${linha} - linhaLacunaH`}>
              { Array.from(({length: 9}), (_, i) => (
                <>
                  <LacunaH index={`${i} - lacunaH`} tipo={'h'}></LacunaH>
                  { i < 8 && <Centro index={`${i} - centro`}></Centro> }
                </>
              ))}
              </tr>

              <tr key={`${linha} - linhaCasas`}>
              {Array.from({length: 9}, (_, i) => {
                qntddCasas++
                return (
                <>
                  <Casa 
                    index={`${i} - casa`} 
                    posicao={qntddCasas} 
                    jogador={jogador} 
                    setJogador={setJogador} 
                    indexJogador={indexJogadorSelecionado}
                    setIndexjogador={setIndexJogadorSelecionado}></Casa>
                  {i < 8 && <LacunaV index={`${i} - lacunaV`} tipo={'v'}></LacunaV>}
                </>
                )
              })}
              </tr>
            </>
          ))}
          
          <tr>
          { Array.from(({length: 9}), (_, i) => (
                <>
                  <LacunaH index={`${i} - lacunaH`} tipo={'h'}></LacunaH>
                  { i < 8 && <Centro index={`${i} - centro`}></Centro> }
                </>
              ))}
          </tr>

          <tr className="trChegada">
            {Array.from({length: 9}, (_, i) => {
              qntddCasas++
              return (
                <>
                  <Casa 
                    index={`${i} - casa`} 
                    posicao={qntddCasas} 
                    jogador={jogador} 
                    setJogador={setJogador} 
                    indexJogador={indexJogadorSelecionado}
                    setIndexJogador={setIndexJogadorSelecionado}></Casa>
                  {i < 8 && <LacunaV index={`${i} - lacunaV`} tipo={'v'}></LacunaV>}
                </>
              )
            })}
          </tr>

        </table>
       </div>


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
        </table>
        </div>
      </>
        
    )
}

export default Tabuleiro