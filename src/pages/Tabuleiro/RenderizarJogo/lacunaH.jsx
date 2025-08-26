import './style.css'

function LacunaH(props) {
    let classe = ''
    
    if (props.prev[2] == 'h' 
        &&(props.prev[0] == props.posicao 
        || props.prev[1] == props.posicao)) {
        classe = 'lacunaPrev'
        //props.setIndexJogador(0)
    }

    function converterCartesiano(){
        let xy = []

        xy[0] = props.posicao%9
        xy[1] = (props.posicao - (props.posicao%9))/9

        return (xy)
    }
    
    function clickLacuna() {
        console.log(props)
        console.log(`clicou na lacuna: ${props.posicao}, tipo: ${props.tipo}`)
        //console.log('lacuna prev:', props.prev)
        //console.log(`xy: ${converterCartesiano()}`)
    }

    return (
        <>
            <td key={props.index} className={`lacunaH lacuna ${classe}`} onClick={clickLacuna}></td>
            
        </>
    )
}

export default LacunaH