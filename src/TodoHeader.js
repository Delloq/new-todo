import React,{Component} from 'react'

class TodoHeader extends Component {

    constructor() {
        super()
        this.state = {
            text:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    handleSubmit(event) {
        alert(this.state.text)
        event.preventDefault()
    }

    render() {
        return(
            <div className='TodoHeader'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        )
    }
}


export default TodoHeader