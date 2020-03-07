import React from 'react'
import { elementChildrenWithProps } from '../shared/SharedFunctions'

export default props =>
    <div>
        <h1>Família</h1>
        {elementChildrenWithProps(props)}
        {/* {React.Children.map(props.children, children => {
            return React.cloneElement(children, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>