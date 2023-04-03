export const Layout = ({ children }) => {
  return (
    <div className='text-white bg-gray-900 h-[calc(100vh-4rem)]'>
      <main className='py-10 h-5/6 px-28'>{children}</main>
    </div>
  )
}
