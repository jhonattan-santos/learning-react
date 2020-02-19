import React from 'react'

export default props => (
    <h1>{props.value}</h1>
)

export const SecondComponent = props => <h1>{props.value}</h1>

// export { FirstComponent, SecondComponent }