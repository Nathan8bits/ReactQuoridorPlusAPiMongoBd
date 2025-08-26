import './style.css'

function LacunaV(props) {
    let classe = ''
    

    
    //array[array.length - 1] 
    //bloqueio = [posicao, tipo]
    
    /*
    if(
        props.posicao == props.bloqueio[props.bloqueio.length -1][0]
        && props.bloqueio[props.bloqueio.length - 1][1] == 'v') {
            classe='bloqueio'
    }
    else 
    
    */
    if (
        props.prev[2] == 'v' 
        &&(props.prev[0] == props.posicao 
        || props.prev[1] == props.posicao)) {
            classe = 'lacunaPrev'
            //props.setIndexJogador(0)
        }
        
        function converterCartesiano(){
            let xy = []
            
            xy[0] = props.posicao%8
            xy[1] = (props.posicao - (props.posicao%8))/8

        return (xy)
    }
    
    function clickLacuna() {
        //console.log(`lacuna prev: ${props.prev}`)
        console.log(props)
        console.log(`clicou na lacuna: ${props.posicao}, tipo: ${props.tipo}`)
        //console.log(`xy: ${converterCartesiano()}`)
    }

    return (
        <>
            <td key={props.index} className={`lacunaV lacuna ${classe}`} onClick={clickLacuna}></td>
            
        </>
    )
}

export default LacunaV

