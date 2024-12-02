const Contact = () => (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Get In Touch</h2>
        <p className="mb-6">Feel free to reach out via email or connect with me on LinkedIn.</p>
        <div className="space-x-6">
          <a href="mailto:michael.yilma@example.com" className="hover:underline">
            Email
          </a>
          <a href="https://linkedin.com/in/michael-yilma91" target="_blank" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/mic-k3y" target="_blank" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
  
  export default Contact;
  