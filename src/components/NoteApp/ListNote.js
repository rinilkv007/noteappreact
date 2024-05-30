import React from 'react'

const ListNote = ({note}) => {
  return (
    <>
        <div className='Note-list'>
            {note.title}

        </div>
        <button className='delete-btn'>DELETE</button>
    </>
  )
}

export default ListNote