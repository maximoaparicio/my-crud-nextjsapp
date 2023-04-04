import Navbar from '@/components/Navbar'
import { TaskProvider } from '@/context/TasksContext'
import './globals.css'
import { Toaster } from './Toaster'
import { Layout } from '../components/Layout'

export const metadata = {
  title: 'Tasks App',
  description: 'Create, Save, Delete and Update tasks'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        ></link>
      </head>
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}
