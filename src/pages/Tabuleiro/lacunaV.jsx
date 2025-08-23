import './style.css'

function LacunaV(props) {
    
    function clickLacuna() {
        console.log(`clicou na lacuna: ${props.index}, tipo: ${props.tipo}`)
    }

    return (
        <>
            <td key={props.index} className="lacunaV lacuna" onClick={clickLacuna}></td>
        </>
    )
}

export default LacunaV

