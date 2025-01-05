import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-8">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['Web Development', 'UI/UX Design', 'API Integration'].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <img
                  src={`https://via.placeholder.com/150?text=${service}`}
                  alt={service}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive {service.toLowerCase()} tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
