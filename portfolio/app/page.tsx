import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background dark:bg-darkBackground text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            I am a Fullstack Developer and Analyst Programmer passionate about
            creating innovative web solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
           <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             With years of experience in fullstack development and analysis, I
             specialize in building robust, scalable, and user-friendly
             applications. From crafting engaging front-end designs to
             implementing efficient back-end solutions, I am dedicated to
             delivering exceptional results that align with client goals.
           </p>
        </section>

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

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Project+${index + 1}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Description of project {index + 1}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Git'].map(
              (skill, index) => (
                <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <img
                    src={`https://via.placeholder.com/100?text=${skill}`}
                    alt={skill}
                    className="mx-auto mb-2"
                  />
                  <p className="text-lg font-medium">{skill}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://via.placeholder.com/300x200?text=Blog+Post+${index + 1}`}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Blog Post {index + 1}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Excerpt from blog post {index + 1}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "This is a testimonial from client {index + 1}. Their feedback
                  goes here."
                </p>
                <h4 className="text-lg font-medium">Client {index + 1}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form
            className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-left mb-2 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
