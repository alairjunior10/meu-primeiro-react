import PropTypes from "prop-types"

function Item ({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

//aqui está definido que a variável marca é string e é obrigatório!
//e a variável ano_lancamento é do tipo number
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//quando não for preenchido corretamente, esse será o preenchimento padrão
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item