//import './style.css'

function LacunaH(props) {
    let classe = ''

    function ehLacunaFixa() {
        let estaFixada = false
        props.lacunaFixa.forEach((index) => {
            if(index[1] == 'h' && props.posicao == index[0]){
                console.log(index)
                console.log(`posicao: ${props.posicao}; tipo: ${props.tipo}`)
                estaFixada = true   
            }

        })
        return estaFixada
    }
    
    if( 
        //props.lacunaFixa.length > 0
        //&& props.lacunaFixa[props.lacunaFixa.length - 1][1] == 'v'
        //&& props.posicao == props.lacunaFixa[props.lacunaFixa.length - 1][0]
        ehLacunaFixa()    
    ) 
    {
        console.log('ACUNA FIXADA')
        console.log(`clicou na lacuna: ${props.posicao}, tipo: ${props.tipo}`)        
            classe = 'bloqueio'
        
    }

    else if (
        props.prev[2] == 'h' 
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