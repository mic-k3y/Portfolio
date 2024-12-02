const Contact = () => (
    <section id="contact" className="bg-blue-800 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg leading-relaxed mb-6">
          Feel free to reach out via email or connect with me on LinkedIn and GitHub.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:michael.yilma@example.com"
            className="p-4 bg-yellow-400 text-blue-900 font-bold rounded hover:scale-105 transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/michael-yilma91"
            className="p-4 bg-yellow-400 text-blue-900 font-bold rounded hover:scale-105 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mic-k3y"
            className="p-4 bg-yellow-400 text-blue-900 font-bold rounded hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
);
  
export default Contact;
  