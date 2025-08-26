import './style.css'

function LacunaV(props) {
    let classe = ''
    
    function ehLacunaFixa() {
        let estaFixada = false
        props.lacunaFixa.forEach((index) => {
            if(index[1] == 'v' && props.posicao == index[0]){
                console.log(index)
                console.log(`posicao: ${props.posicao}; tipo: ${props.tipo}`)
                
                estaFixada =  true
            }
        })
        return estaFixada
    }

    if(
        //props.lacunaFixa.length > 0
        //&& props.lacunaFixa[props.lacunaFixa.length - 1][1] == 'h'
        //&& props.posicao == props.lacunaFixa[props.lacunaFixa.length - 1][0]
        ehLacunaFixa()
    ) 
    {
            classe = 'bloqueio'
        
    }
    else if (
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
        console.log(`tamanho dos bloqueios: ${props.lacunaFixa.length}`)
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

