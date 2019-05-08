import React from 'react'

function Todos(props) {

    const items = props.content;
    const listItems = items.map((item) => <li>{item}</li>) 

    return(
        <div>
            {listItems}
        </div>
    )

}

export default Todos