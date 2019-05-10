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
        this.idGenerator = this.idGenerator.bind(this)
    }

    idGenerator() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        alert(rand);
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

    render() {
        return(
            <div className='TodoApp'>
                <TodoHeader onNewItem = {this.addNewItem}/>
                <TodoList items={this.state.todos}/>
            </div>            
        )
    }
}

export default TodoApp