import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponent from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'
// import MultiElementosComponent from './componentes/MultiElementosComponent'
// import FamiliaSilvaComponent from './componentes/FamiliaSilvaComponent'
// import Famila from './componentes/FamiliaComponent'
// import Membro from './componentes/MembroComponent'
// import ComponentComFuncao from './componentes/ComponenteComFuncao'
// import PaiComponent from './componentes/PaiComponent'
// import ClasseComponent from './componentes/ClasseComponent'
// import ContadorComponent from './componentes/ContadorComponent'
import HookComponent from './componentes/HookComponent'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <HookComponent />
        {/* <ContadorComponent numeroInicial={0} /> */}
        {/* <ClasseComponent valor="Sou um componente de classe!"/> */}
        {/* <PaiComponent /> */}
        {/* <ComponentComFuncao /> */}
        {/* <Famila sobrenome="Santos">
            <Membro nome="Jhonattan" />
            <Membro nome="Jessica" />
        </Famila>
        <FamiliaSilvaComponent /> */}
        {/* <MultiElementosComponent></MultiElementosComponent> */}
        {/* <CompA valor="Teste A!"></CompA> */}
        {/* <CompB valor="Teste B!"></CompB> */}
        {/* <PrimeiroComponent title="Primeiro componente passando title como props!"/> */}
    </div>
    , elemento)