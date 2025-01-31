import React from 'react'

const Task = (props) => {
    console.log(props)
    return (
        <>
         <input type="checkbox" /><label>  {props.task} </label>
         <br></br>
        </>
    )
}

export default Task