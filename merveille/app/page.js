// import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className="p-6 text-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I am a Fullstack Developer and Analyst Programmer passionate about creating amazing web experiences.
        </motion.p>
      </main> */}
      <Footer />
    </>
  );
}
