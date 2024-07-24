import React from 'react'


const Todolist = (props) => {

    return (

        < li className="listitem">
            {props.item}
            < span className='icons' > <i className="fa-solid fa-trash-can icon-delete" onClick={e => {
                props.deleteItem(props.index)
            }}></i>
            </span >
        </li >




    )
}

export default Todolist
