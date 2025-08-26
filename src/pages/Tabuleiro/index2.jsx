import './style.css'
import jogador1 from '../../assets/jogador1.png'
import { useState, useEffect } from 'react'
import Casa from './RenderizarJogo/casa'
import LacunaV from './RenderizarJogo/lacunaV'
import LacunaH from './lacunaH'
import Centro from './RenderizarJogo/centro'

function Tabuleiro () {

  const [jogador, setJogador] = useState([13, 67]) //posição, t
  const [indexJogadorSelecionado, setIndexJogadorSelecionado] =  useState(null)
  const [lacunasPrev, setLacunasPrev] = useState([])
  const [contClickCentro, setconClickCentro] = useState(1)
  const [movPosiPeca, setMovPosiPeca] = useState([])
  useEffect(() => {
  console.log(`jogador - (${indexJogadorSelecionado}) 
      sua posicao: ${jogador[indexJogadorSelecionado]}
      `)  // aqui o valor de jogador[0] já é o novo
  }, [jogador, indexJogadorSelecionado, lacunasPrev, contClickCentro, movPosiPeca])//monitona mudanças no estado
  

  let qntddCasas = -1
  let qntddLacunasV = -1
  function addQntddLacunasV(i) {
    if(i < 8) {
      qntddLacunasV++
    }
  }
  let qntddLacunasH = -1

  let  qntddCentro = -1
  function addQntddCentro(i) {
    if(i < 8) {
      qntddCentro++
    }
  }


     return (
       <>
       <div className="container">
        <table>
          <tr className="trChegada">
            {Array.from({length: 9}, (_, i) => {
              qntddCasas++
              i < 8 ? qntddLacunasV++ : null
                
              return (
                <>
                  <Casa 
                    movPosi={movPosiPeca}
                    setMoviPosi={setMovPosiPeca}
                    posicao={qntddCasas} 
                    jogador={jogador} 
                    setJogador={setJogador} 
                    indexJogador={indexJogadorSelecionado}
                    setIndexJogador={setIndexJogadorSelecionado}></Casa>
                  {i < 8 && 
                  <LacunaV 
                    prev={lacunasPrev} 
                    posicao={qntddLacunasV} 
                    tipo={'v'}></LacunaV>}
                </>
              )
            })}
          </tr>

          {Array.from(({length: 7}), (_, linha) => (
            <>
              <tr key={`${linha} - linhaLacunaH`}>
              { Array.from(({length: 9}), (_, i) => {
                qntddLacunasH++
                addQntddCentro(i)

                return (
                <>
                  <LacunaH 
                    prev={lacunasPrev} 
                    posicao={qntddLacunasH} 
                    tipo={'h'}></LacunaH>
                  { i < 8 && 
                  <Centro 
                    setContClick={setconClickCentro}
                    contClick={contClickCentro}
                    setLacunasPrev={setLacunasPrev} 
                    posicao={qntddCentro}></Centro> }
                </>
                )
              })}
              </tr>

              <tr key={`${linha} - linhaCasas`}>
              {Array.from({length: 9}, (_, i) => {
                qntddCasas++
                addQntddLacunasV(i)

                return (
                <>
                  <Casa 
                    movPosi={movPosiPeca}
                    setMoviPosi={setMovPosiPeca}
                    posicao={qntddCasas} 
                    jogador={jogador} 
                    setJogador={setJogador} 
                    indexJogador={indexJogadorSelecionado}
                    setIndexJogador={setIndexJogadorSelecionado}></Casa>
                  {i < 8 && 
                  <LacunaV
                    prev={lacunasPrev}
                    posicao={qntddLacunasV} 
                    tipo={'v'}></LacunaV>}
                </>
                )
              })}
              </tr>
            </>
          ))}
          
          <tr>
          { Array.from(({length: 9}), (_, i) => {
            qntddLacunasH++
            addQntddCentro(i)
                
            return (
              <>
                <LacunaH 
                  prev={lacunasPrev}
                  posicao={qntddLacunasH} 
                  tipo={'h'}></LacunaH>
                { i < 8 && 
                <Centro 
                  setLacunasPrev={setLacunasPrev} 
                  posicao={qntddCentro}></Centro> }
              </>
            )
            })}
          </tr>

          <tr className="trChegada">
            {Array.from({length: 9}, (_, i) => {
              qntddCasas++
              addQntddLacunasV(i)

              return (
                <>
                  <Casa 
                    movPosi={movPosiPeca}
                    setMoviPosi={setMovPosiPeca}
                    posicao={qntddCasas} 
                    jogador={jogador} 
                    setJogador={setJogador} 
                    indexJogador={indexJogadorSelecionado}
                    setIndexJogador={setIndexJogadorSelecionado}></Casa>
                  {i < 8 && 
                  <LacunaV 
                    prev={lacunasPrev}
                    posicao={qntddLacunasV} 
                    tipo={'v'}></LacunaV>}
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