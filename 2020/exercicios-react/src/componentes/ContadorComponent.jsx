import React, {Component} from 'react'

export default class ContadorComponent extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        // this.props.numero++
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }

    alterarNumero = (diferanca) => {
        this.setState({numero: this.state.numero + diferanca})
    }

    render() {
        return (
        <div>
            <div>Número: {this.state.numero}</div>
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.menosUm}>Dec</button>
            <button onClick={() => this.alterarNumero(+10)}>Inc10</button>
            <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
        </div>
        )
    }
}