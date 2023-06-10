import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { motion } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial: { opacity: 0.90 },
        pageAnimate: { opacity: 1 },
      }}>
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
  );
}
