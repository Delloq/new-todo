import React,{Component} from 'react'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList'

class TodoApp extends Component {

    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id:0,
                    content:'Something!'
                },
                {
                    id:1,
                    content:'Drink coffe!'
                }
            ]
        }

        this.addNewItem = this.addNewItem.bind(this)
    }

    addNewItem() {
        
    }

    render() {
        return(
            <div className='TodoApp'>
                <TodoHeader onNewItem = {(item) => this.addNewItem()}/>
                <TodoList items={this.state.todos}/>
                <button onClick={this.addNewItem()}></button>
            </div>
        )
    }
}

export default TodoApp