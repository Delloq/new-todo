import React,{Component} from 'react'
import {Checkbox} from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";

const styles = {

    itemСontainer: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'baseline',
        margin: '5px',
        listStyleType: 'none',
        padding: '5px',
        backgroundColor: '#FBCEB1',
    },
    delItem: {
        fontStyle: 'italic',
    },
    
}

class TodoListItem extends Component {

   render() {
       const item = this.props.item;
        return (
            <li style={styles.itemСontainer} className='item'>
                <Checkbox type='checkbox' 
                    checked={item.checked}
                    onChange={(event) => this.props.onCheckedItem(item, event.target.checked)}
                />          
                {item.checked ? 
                    <del style={styles.delItem}>{item.content}</del> : 
                    <span style={styles.a}>{item.content}</span>
                }
                <Button  rightIcon='delete' intent='danger' text='Delete' onClick={() => this.props.onDeleteItem(item)}/>
            </li>
        ) 
    }
    
}

export default TodoListItem