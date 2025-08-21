import { useRef } from 'react'
import './style.css'
import jogador1 from '../../assets/jogador1.png'
import jogador2 from '../../assets/jogador2.png'

function Jogo() {



    return (
        <div className="container">
            <table>
                <tr className='trChegada'>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>                    
                        <img className='jogador' src={jogador1} alt="" />
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    <img className='jogador' src={jogador2} alt="" />
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
                <tr>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                    <td className="centro"></td>
                    <td className='lacunaH'></td>
                </tr>
                <tr className='trChegada'>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'>
                    </td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className='casa'></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                    <td className='lacunaV'></td>
                    <td className="casa"></td>
                </tr>
            </table>
        </div>
    )

}
export default Jogo