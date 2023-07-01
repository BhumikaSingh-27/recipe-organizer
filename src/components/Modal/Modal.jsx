import React from 'react'

const Modal = () => {
  return (
    <div>
        <div>
            <h2>Add new</h2>
            <label htmlFor="name">Name of Cuisine</label>
            <input type="text" id="name" placeholder='Enter cuisine name'/>
            <label htmlFor="">Cuisine</label>
            <input type="text" placeholder='type' />
            <input type="file"  />
        </div>
    </div>
  )
}

export default Modal