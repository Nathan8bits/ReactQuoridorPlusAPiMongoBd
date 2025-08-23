import './style.css'

function LacunaH(props) {
    
    function clickLacuna() {
        console.log(`clicou na lacuna: ${props.index}, tipo: ${props.tipo}`)
    }

    return (
        <>
            <td key={props.index} className="lacunaH lacuna" onClick={clickLacuna}></td>
        </>
    )
}

export default LacunaH