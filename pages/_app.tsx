import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return <ThemeProvider attribute='class'>
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-200 dark:bg-black-500">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl dark:bg-dark-200 dark:bg-black-500">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <p className='text-center my-5'>Copyright © 2022 rahul</p>
      </div>
    </div>
  </ThemeProvider>

}

export default MyApp
