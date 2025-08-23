import './style.css'

export default function Centro(props) {

    function clickCentro() {
        console.log(`clicou no centro: ${props.index}`)
    }

    return (
        <>
            <td key={props.index} className="centro"  onClick={clickCentro}></td>
        </>
    )
}
