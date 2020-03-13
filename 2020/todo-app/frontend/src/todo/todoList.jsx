import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { remove, markAsPending, markAsDone } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={ todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='tableActions'>
                    <IconButton 
                        style='danger' 
                        icon='trash-o' 
                        onClick={() => props.remove(todo)}
                        hide={!todo.done}
                    />

                    <IconButton 
                        style='success' 
                        icon='check'
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}
                    />

                    <IconButton 
                        style='warning' 
                        icon='undo'
                        onClick={() => props.markAsPending(todo)}
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

const mapStateToProps = state => ( { list: state.todo.list } )
const mapDispatchToProps = dispatch => bindActionCreators( { remove, markAsPending, markAsDone }, dispatch )
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)