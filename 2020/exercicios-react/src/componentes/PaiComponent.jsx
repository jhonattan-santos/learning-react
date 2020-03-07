import React from 'react'
import FilhoComponent from './FilhoComponent'

export default props => {
    const notificarSaidaDoFilho = lugar => alert(`Saida liberada para o ${lugar}`)

    return (
        <div>
            <FilhoComponent notificarSaida={notificarSaidaDoFilho}/>
        </div>
    )
}