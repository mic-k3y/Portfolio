const Projects = () => {
    const projects = [
      {
        title: 'Atoll Segmentation CV Model',
        tech: 'Python, TensorFlow, Numpy, Pandas, Keras, OpenCV',
        details: [
          'Built a U-NET model to classify 1,500+ satellite images with 86% F1 Score.',
          'Analyzed Mean IoU metrics for performance evaluation.',
        ],
      },
      {
        title: 'VidSnap.ai',
        tech: 'Typescript, ReactJS, TailWindCSS, Vite, Next.js',
        details: [
          'Developed a chatbot app using ChatGPT API to analyze YouTube captions.',
        ],
      },
      {
        title: 'Schelling’s Model of Segregation',
        tech: 'Python, Zelle Graphics',
        details: [
          'Simulates residential segregation dynamics using Zelle Graphics.',
        ],
      },
    ];
  
    return (
      <section id="projects" className="min-h-screen bg-blue-50 text-blue-900 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center animate-slideInLeft">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-blue-100 shadow-md hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="italic text-sm mb-4">{project.tech}</p>
                <ul className="list-disc ml-6 text-left text-sm space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
export default Projects;
  