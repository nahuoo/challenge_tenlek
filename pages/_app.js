import '../styles/globals.css'
import { ApiDataProvider } from '../context/apiContext'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ApiDataProvider>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial:{
          opacity: 0
        },
        pageAnimate:{
          opacity: 1
        }
      }}>
      <Component {...pageProps} />
      </motion.div>
    </ApiDataProvider>
  )
}

export default MyApp
