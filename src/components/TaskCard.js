import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'
import { toast } from 'react-hot-toast'

export const TaskCard = ({ task }) => {
  const router = useRouter()
  const { deleteTask } = useTasks()

  return (
    <div
      className='px-6 py-5 m-2 overflow-auto rounded-sm cursor-pointer bg-slate-700 hover:bg-slate-600'
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1 className='py-2 text-3xl font-bold'>{task.title}</h1>
      <p className='py-2 text-2xl text-gray-300'>{task.description}</p>
      <div className='flex items-center justify-between'>
        <button
          className='inline-flex items-center px-3 py-1 bg-red-700 rounded-sm hover:bg-red-600'
          onClick={(e) => {
            e.stopPropagation()
            const accept = window.confirm('Are you sure you want to delete')
            if (accept) {
              deleteTask(task.id)
              toast.success('task deleted successfully')
            }
          }}
        >
          Delete
        </button>
        <span className='text-xs text-slate-400'>{task.id}</span>
      </div>
    </div>
  )
}
