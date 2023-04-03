'use client'
import { TaskCard } from '@/components/TaskCard'
import { useTasks } from '@/context/TasksContext'

function Page() {
  const { tasks } = useTasks()

  return (
    <div className='grid grid-cols-3'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

export default Page
