import React,{Component} from 'react'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList'

const styles = {
    
    appContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    wrapper: {
        marginTop: '50px',
        flex: '0 0 800px',
        backgroundColor: '#eee',
        borderRadius: '15px',    
    },

    countContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },

    counteItem: {
        fontSize: '12px',
        fontFamily: 'Monospace',
        fontWeight: 'bold',
        borderBottom: '1px solid black'
    },

}

class TodoApp extends Component {

    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id:this.idGenerator(),
                    content:'Something!',
                    checked: true
                },
                {
                    id:this.idGenerator(),
                    content:'Drink coffe!',
                    checked:false
                }
            ]
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.checkedItem = this.checkedItem.bind(this);
        this.deleteCheckedItems = this.deleteCheckedItems.bind(this);
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
            checked: false
        };

        this.setState({
            todos:[newItem, ...this.state.todos],
        });
        return newItem
    }

    removeItem(item) {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter(next => next.id !== item.id)
        });
    }

    checkedItem(item, value) {
        const newItem = { ...item, checked: value };
        const { todos } = this.state;
        console.log(newItem);

        this.setState({ 
            todos: todos.map(next => next.id === newItem.id ? newItem : next) 
        });
    }

    deleteCheckedItems() {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(next => next.checked === false)
        })        
    }

    render() {

        const {todos} = this.state;
        const chechedCount = todos.filter(next => next.checked === true); 

        const allTask = this.state.todos.length;
        const checkTask = chechedCount.length;
        const noCheckTask = allTask - checkTask;

        return(
            <div style={styles.appContainer}>
                <div style={styles.wrapper}>
                    <TodoHeader onNewItem = {this.addNewItem} deleteItem={this.deleteCheckedItems}/>
                    <TodoList items={this.state.todos} 
                        onDeleteItem={this.removeItem}
                        onCheckedItem={this.checkedItem} />

                    <div style={styles.countContainer}>
                        <p style={styles.counteItem}>All task: {allTask}</p>
                        <p style={styles.counteItem}>Completed tasks: {checkTask}</p>
                        <p style={styles.counteItem}>Outstanding tasks: {noCheckTask}</p>
                    </div>
                </div>            
            </div>
        )
    }
}

export default TodoApp