import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponent from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <CompA valor="Teste A!"></CompA>
        <CompB valor="Teste B!"></CompB>
        {/* <PrimeiroComponent title="Primeiro componente passando title como props!"/> */}
    </div>
    , elemento)