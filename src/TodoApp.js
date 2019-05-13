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
        this.removeItem = this.removeItem.bind(this)
    }

    idGenerator() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        return (
            rand
        )
    }

    addNewItem(text) {
        const newItem = {
            id: this.idGenerator(),
            content: text,
        }

        this.setState({
            todos:[...this.state.todos, newItem],
        })
        
    }

    removeItem(item) {
        const delTodos = [...this.state.todos]
        const delItem = delTodos.indexOf(item);
        delTodos.splice(delItem,1)
        this.setState({
            todos: delTodos
        })
    }

    render() {
        return(
            <div className='TodoApp'>
                <TodoHeader onNewItem = {this.addNewItem}/>
                <TodoList items={this.state.todos} onDeleteItem={this.removeItem}/>
            </div>            
        )
    }
}

export default TodoApp