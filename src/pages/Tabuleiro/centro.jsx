import './style.css'

export default function Centro(props) {
    //let contagemClick = 1
    let lacunaPrev

    function addContagemClick() {
        props.setContClick( 1- props.contClick) // 0 e 1
    }

    function converterCartesiano(i){
        let xy = []

        xy[0] = i%8
        xy[1] = (i - (i%8))/8

        return (xy)
    }

    function lacunasVizinhas() {
        addContagemClick()
        let xy = converterCartesiano(props.posicao)
        //console.log(`xy: ${xy}`)

        if(props.contClick == 0) {
            //props.setLacunasPrev([props.posicao, props.posicao+8, 'v'])
            //return 
            lacunaPrev =  [props.posicao, props.posicao+8, 'v']
        } else if (props.contClick == 1) {
            //props.setLacunasPrev([props.posicao + xy[1], props.posicao + xy[1] + 1, 'h'])
            //return 
            lacunaPrev = [props.posicao + xy[1], props.posicao + xy[1] + 1, 'h']
        }

        //props.setLacunasPrev(prev => [...prev, lacunaPrev]);

        props.setLacunasPrev(lacunaPrev)
        return lacunaPrev
    }

    function clickCentro() {
        if(props.posicao > 7 && props.posicao < 56) {
            let lv = lacunasVizinhas()
            //props.setLacunasPrev(lv)
            console.log(`centro: ${props.posicao}, click ${props.contClick},`)
            console.log(`Lacunas vizinhas: ${lv}`)

        }
    }

    return (
        <>
            <td key={props.index} className={`centro`}  onClick={clickCentro}></td>
            
        </>
    )
}
