import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent, {SecondComponent} from './component'

ReactDOM.render(
    <div>
        <FirstComponent value="First component!"/>
        <SecondComponent value="Second component!"/>
    </div> 
    ,document.getElementById('app')
)