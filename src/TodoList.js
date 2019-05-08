import React,{Component} from 'react'
import Todos from './Todos'

class TodoList extends Component {
    constructor() {
        super()

        this.state = {
            items: [
                {
                    id: 1,
                    content: 'Drink milk'
                },
                {
                    id: 2,
                    content: 'Read book'
                }
            ]
        }
    }
    render() {
        return(
            <Todos content={this.state.content} />
        )
    }
}


export default TodoList