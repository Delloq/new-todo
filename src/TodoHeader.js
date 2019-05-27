import React,{Component} from 'react'
import { Button, ButtonGroup } from "@blueprintjs/core";

const styles = {

    containerHeader: {
        display: 'flex',
    },
    
    wrapperHeader: {
        flex: '0 0 620px',
        padding: '10px',
        marginRight: '5px',
    }

}

class TodoHeader extends Component {

    constructor() {
        super()
        this.state = {text:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.text === '') {
            event.preventDefault();
            return;
        }

        this.props.onNewItem(this.state.text);
        this.setState({text: ''});
        event.preventDefault();
    }

    render() {
        return(
            <div style={styles.containerHeader}>
                <div style={styles.wrapperHeader}>
                    <form onSubmit={this.handleSubmit}>
                        <ButtonGroup>
                            <input style={styles.wrapperHeader} className='inputHeader' onChange={this.handleChange} value={this.state.text} placeholder='Enter task...'/>
                            <Button  className='headerButton' rightIcon='add' type='submit' text='Add'/>
                            <Button  className='headerButton' rightIcon='delete' intent='danger' text='Delete' onClick={this.props.deleteItem}/>
                        </ButtonGroup>                    
                    </form>
                </div>
            </div>
        ) 
    }
}

export default TodoHeader