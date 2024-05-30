import React from 'react'

const AddNote = () => {
  return (
    <div>
        <div>
            <input type='text' className='input' placeholder='Add a new note' />
            <button className='add-btn'>ADD</button>
        </div>
    </div>
  )
}

export default AddNote