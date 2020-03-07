import React, { Component } from 'react'

export default class ClasseComponent extends Component {
    render() {
        return (
            <h1>{this.props.valor || 'Não temos nada declarado como valor!'}</h1>
            // <h1>Olá Classe!</h1>
        )
    }
}