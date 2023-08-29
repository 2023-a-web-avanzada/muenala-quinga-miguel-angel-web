import { connectDB } from '../utils/mongos';
import Task from '../models/Task'
import TaskCard from '../components/TaskCard'

async function loadTasks(){
  connectDB()
  const tasks = await Task.find()
  console.log(tasks)
  return tasks
}

async function HoemPage(){
  const tasks = await loadTasks()
  return(
    <div className = 'grid grid-cols-3 gap-2'>
      {tasks.map(task =>(
        <TaskCard task={task} key={task._id}></TaskCard>
      ))}
    </div>
  )
}

export default HoemPage