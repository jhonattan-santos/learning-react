import React from 'react'

const aprovados = ['Tati', 'Jhonattan', 'Marcos', 'Livia']

export default props => {
    
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}