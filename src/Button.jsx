import React from 'react'

const Button = ({filterAll, filterActive, filterComplete, clearCache}) => {
  return (
    <div className='btnContainer'>
        <button onClick={filterAll} >All</button>
        <button onClick={filterActive} >Active</button>
        <button onClick={filterComplete} >Complete</button>
        <button onClick={clearCache} >Clear</button>
    </div>
  )
}

export default Button