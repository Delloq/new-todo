import React,{Component} from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {

    render() {
        return(
            <div className='TodoList'>
                <ul>
                    {this.props.items.map(item => <TodoListItem id={item.id} item={item} onDeleteItem={() => this.props.onDeleteItem(item)} />)}
                </ul>
            </div>
        )
    }

}

export default TodoList