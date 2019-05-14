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
                    content:'Something!',
                    cheked: true
                },
                {
                    id:1,
                    content:'Drink coffe!',
                    cheked:'false'
                }
            ]
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    idGenerator() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
          });
    }

    addNewItem(text) {
        const newItem = {
            id: this.idGenerator(),
            content: text,
        };

        this.setState({
            todos:[...this.state.todos, newItem],
        });
    }

    removeItem(item) {
        const delTodos = [...this.state.todos]
        const delItem = delTodos.indexOf(item);
        delTodos.splice(delItem,1);
        this.setState({
            todos: delTodos
        });
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