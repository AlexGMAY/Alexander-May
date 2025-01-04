import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <motion.h1
          className="text-3xl font-bold text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h1>
        <motion.ul
          className="mt-8 space-y-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <li>- Web Development</li>
          <li>- UI/UX Design</li>
          <li>- Backend Development</li>
          <li>- Data Analysis</li>
        </motion.ul>
      </main>
      <Footer />
    </>
  );
}
