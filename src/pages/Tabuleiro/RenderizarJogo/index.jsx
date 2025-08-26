import { useState, useEffect } from 'react'
import Casa from './casa'
import LacunaV from './lacunaV'
import LacunaH from './lacunaH'
import Centro from './centro'
import Botao3d from './Botao3d/Botao3d'
import './style.css'
//import BotaoCliqueWow from './BotaoCliqueWow'


export default function RenderizarJogo ({jogador, setJogador, indexJogador, setIndexJogador, bloqueio, setBloqueio}) {

    const [lacunasPrev, setLacunasPrev] = useState([])
    const [contClickCentro, setconClickCentro] = useState(1)
    const [movPosiPeca, setMovPosiPeca] = useState([])
    useEffect(() => {
    console.log(
        'Atualizado'
    )  // aqui o valor de jogador[0] já é o novo
    }, [lacunasPrev, contClickCentro, movPosiPeca])//monitona mudanças no estado
  

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
    function clickAddBloqueio(){
        setBloqueio(prev => [...prev, lacunasPrev])
        console.log('btn FIXAR')
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
                     indexJogador={indexJogador}
                     setIndexJogador={setIndexJogador}></Casa>
                   {i < 8 && 
                   <LacunaV 
                     lacunaFixa={bloqueio}
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
                     lacunaFixa={bloqueio}
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
                     indexJogador={indexJogador}
                     setIndexJogador={setIndexJogador}></Casa>
                   {i < 8 && 
                   <LacunaV
                     lacunaFixa={bloqueio}
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
                   lacunaFixa={bloqueio} 
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
                     indexJogador={indexJogador}
                     setIndexJogador={setIndexJogador}></Casa>
                   {i < 8 && 
                   <LacunaV 
                     lacunaFixa={bloqueio}
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
            <Botao3d texto={'add block'}></Botao3d>
            <Botao3d
                funcao={clickAddBloqueio} 
                texto={'fixar'}></Botao3d>
        </div>
    </>
    )
}