'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTasks } from '../context/TasksContext'

export default function Navbar() {
  const router = useRouter()
  const { tasks } = useTasks()

  return (
    <header className='flex justify-between px-3 py-2 text-white bg-gray-800 md:px-28'>
      <Link href='/'>
        <h1 className='text-2xl font-bold md:text-3xl'>Task App</h1>
        <span className='text-lg cursor-default text-slate-300'>
          {tasks.length} tasks
        </span>
      </Link>
      <div className='inline-flex items-center'>
        <button
          onClick={() => router.push('/new')}
          className='px-5 py-2 text-lg bg-green-500 rounded-lg  md:hidden'
        >
          new
        </button>
        <button
          onClick={() => router.push('/new')}
          className='items-center hidden px-5 py-2 font-bold leading-9 bg-green-500 rounded-lg hover:bg-green-400 text-gray-50 md:block'
        >
          Add new task
        </button>
      </div>
    </header>
  )
}
