import React,{Component} from 'react'

class TodoListItem extends Component {
   render() {
        return(
            <div>
                <li key={this.props.item.id}>
                    <button onClick={() => this.props.onDeleteItem(this.props.item)}>Delete</button>
                    <input type='checkbox'/>
                </li>
            </div>
        ) 
    }
}

export default TodoListItem