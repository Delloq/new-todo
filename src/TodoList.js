import React,{Component} from 'react'
import TodoListItem from './TodoListItem'

const styles = {
    
    container: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    
    item: {
        padding: '0px',
        margin: '0px',
    }

}

class TodoList extends Component {

    render() {
        return(
            <div style={styles.container}>
                <div style={styles.item}>
                    {this.props.items.map(item => 
                        <TodoListItem key={item.id} 
                            item={item} 
                            onDeleteItem={this.props.onDeleteItem}
                            onCheckedItem={this.props.onCheckedItem}
                            onTaskEditing={this.props.onTaskEditing}
                            onAddSubItem={this.props.onAddSubItem}
                        />
                    )}
                </div>
            </div>
        )
    }

}

export default TodoList