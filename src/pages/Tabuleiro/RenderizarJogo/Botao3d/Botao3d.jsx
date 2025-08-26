import './botao3d.css'

function Botao3d(props) {
    
    return(
        <div>
            <div className="button"
                onClick={props.funcao}>
                <a> {props.texto}</a>
            </div>
        </div>
    )
}

export default Botao3d