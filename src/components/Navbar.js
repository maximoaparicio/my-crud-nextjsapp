'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTasks } from '../context/TasksContext'

export default function Navbar() {
  const router = useRouter()
  const { tasks } = useTasks()

  return (
    <header className='flex justify-between bg-gray-800 px-28 py-3 text-white'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>Task App</h1>
      </Link>
      <span className='text-slate-300 text-lg cursor-default leading-9'>
        {tasks.length} tasks
      </span>
      <div>
        <button
          onClick={() => router.push('/new')}
          className='bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-lg items-center inline-flex'
        >
          Add new task
        </button>
      </div>
    </header>
  )
}
