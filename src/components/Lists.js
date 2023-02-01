import React from 'react'
import BadLists from './BadLists'
import TaskList from './TaskList'

const Lists = ({tasks, taskSwitcher, handleDelete}) => {
  const entryList = tasks.filter((item) => item.type === "entry")
  const badList = tasks.filter((item)=> item.type === "bad")
  return (
    <div className='row mt-5 g-2'>
      <TaskList entryList={entryList} taskSwitcher={taskSwitcher} handleDelete={handleDelete} />
      <BadLists badList={badList} taskSwitcher={taskSwitcher} handleDelete={handleDelete}/>
    </div>
  )
}

export default Lists
