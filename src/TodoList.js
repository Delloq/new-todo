import React,{Component} from 'react'

class TodoList extends Component {

    render() {
        return(
            <div className='TodoList'>
                <ul>
                    {this.props.items.map(item => (
                        <li>{item.content}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default TodoList