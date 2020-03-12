import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const baseURL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPendding = this.handleMarkAsPendding.bind(this)
        
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${baseURL}?sort=-createdAt${search}`)
            .then(res => this.setState({ ...this.state, description, list: res.data }))
    }
    
    handleAdd() {
        const description = this.state.description
        axios.post(baseURL, { description })
            .then( res => { this.refresh() })
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        axios.delete(`${baseURL}/${todo._id}`)
            .then( res => { this.refresh(this.state.description) })
        // axios.delete(`${baseURL}/?:id`, { id: todo._id })
        //     .then( res => { this.refresh() })
    }

    handleMarkAsDone(todo) {    
        axios.put(`${baseURL}/${todo._id}`, { ...todo, done: true })
            .then( res => { this.refresh(this.state.description) })
    }

    handleMarkAsPendding(todo) { 
        axios.put(`${baseURL}/${todo._id}`, { ...todo, done: false })
            .then( res => { this.refresh(this.state.description) })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='cadastro'/>
                <TodoForm 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear ={this.handleClear}
                    description={this.state.description}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPendding={this.handleMarkAsPendding}
                />
            </div>
        )
    }
}