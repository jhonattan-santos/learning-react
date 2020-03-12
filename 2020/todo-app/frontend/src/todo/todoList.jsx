import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={ todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='tableActions'>
                    <IconButton 
                        style='danger' 
                        icon='trash-o' 
                        onClick={() => props.handleRemove(todo)}
                        hide={!todo.done}
                    />

                    <IconButton 
                        style='success' 
                        icon='check'
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}
                    />

                    <IconButton 
                        style='warning' 
                        icon='undo'
                        onClick={() => props.handleMarkAsPendding(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table todoForm'>
            <thead>
                <tr>
                   <th>Descrição</th>
                   <th>Ações</th>
                </tr>     
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}