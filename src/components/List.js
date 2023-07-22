import Item from "./Item";

function List () {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Porsche" ano_lancamento={1990}/>
                <Item marca="Dodge" ano_lancamento={2000}/>
            </ul>
        </>
    )
}

export default List;