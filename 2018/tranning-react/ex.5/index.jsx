import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Santos">
        <Member name="Jhonattan" />
        <Member name="José" />
        <Member name="Célia" />
        <Member name="Thaynna" />
    </Family>
    ,document.getElementById('app')
)