import React,{Component} from 'react'

class TodoList extends Component {

    render() {
        return(
            <div className='TodoList'>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>
                            {item.content}
                            <button onClick={ () => this.props.onDeleteItem(item)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default TodoList