const Projects = () => (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'VidSnap.ai',
              description: 'A chatbot application using ChatGPT API to analyze YouTube videos.',
            },
            {
              name: 'Atoll Segmentation CV Model',
              description: 'A U-Net architecture for satellite image segmentation.',
            },
          ].map((project) => (
            <div
              key={project.name}
              className="p-6 bg-white text-black shadow-lg rounded-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  