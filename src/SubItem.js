import React,{Component} from 'react'

class SubItem extends Component {
    render() {

        const item = this.props.item;

        return (
            <li>

                <span>{item.content}</span>
                <button></button>
            </li>
        ) 
    }
}

export default SubItem