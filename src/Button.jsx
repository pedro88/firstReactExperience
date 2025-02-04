import React from 'react'

const Button = ({filterAll, filterActive, filterComplete}) => {
  return (
    <div className='btnContainer'>
        <button onClick={filterAll} >All</button>
        <button onClick={filterActive} >Active</button>
        <button onClick={filterComplete} >Complete</button>
    </div>
  )
}

export default Button