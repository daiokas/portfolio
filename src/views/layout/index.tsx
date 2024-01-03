import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='layout max-w-full overflow-x-hidden'>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <div className='md:hidden'>
        <Navbar />
      </div>
      <div className='mx-auto max-w-5xl'>

        {children}

      </div>
    </div>
  )
}

export default Layout