'use client'
import { useEffect } from 'react'
import { useTasks } from '../../context/TasksContext'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('task updated successfully')
    } else {
      createTask(data.title, data.description)
      toast.success('task created successfully')
    }
    router.push('/')
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id)
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  }, [])

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={onSubmit}
        className='w-6/12 p-10 text-center bg-gray-700 rounded-sm'
      >
        <h2 className='mb-6 text-3xl'>
          {params.id ? 'Edit Task' : 'New Task'}
        </h2>
        <input
          className='block w-full px-4 py-3 mb-2 bg-gray-800 focus:outline-none '
          placeholder='Write a title'
          {...register('title', { required: true })}
        />
        {errors.title && (
          <span className='block mb-2 text-red-400'>
            This field is required
          </span>
        )}
        <textarea
          className='block w-full px-4 py-3 mb-2 bg-gray-800 focus:outline-none h-44'
          placeholder='Write a description'
          {...register('description', { required: true })}
        />
        {errors.description && (
          <span className='block mb-2 text-red-400'>
            This field is required
          </span>
        )}
        <button className='inline-flex items-center px-3 py-1 bg-green-700 rounded-lg hover:bg-green-600 disabled:opacity-30'>
          Save
        </button>
      </form>
    </div>
  )
}

export default Page
