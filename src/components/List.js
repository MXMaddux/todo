import React from 'react'

const List = ({ items, removeItem, editItem }) => {
    
  return (
    <div className="todo-list" >
      {items.map(item => {
        const {id, title} = item;
      })}
    </div>
  )
}

export default List
