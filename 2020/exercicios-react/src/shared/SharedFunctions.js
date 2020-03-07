import React from 'react'

export function elementChildrenWithProps(props) {
    return React.Children.map(props.children, children => {
        return React.cloneElement(children, {...props})
    })
}