import "../styles/globals.css"

// components
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'> 
          <Transition /> 
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>

  );
}

export default MyApp;
