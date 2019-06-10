import React,{Component} from 'react'
import SubItem from './SubItem';

class SubList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => <SubItem item={item} key={item.id}/>)}
            </div>
        )
    }
}

export default SubList