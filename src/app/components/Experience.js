const Experience = () => (
    <section id="experience" className="py-16 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'STEP Intern at Google',
              description: 'Developed ML solutions to predict risky code changes, trained LLMs, and built scalable data pipelines.',
            },
            {
              title: 'ML Intern at SureStart AI',
              description:
                'Built text-to-3D Generative AI models using Neural Radiance Fields (NeRF) and diffusion models.',
            },
          ].map((job) => (
            <div
              key={job.title}
              className="p-6 bg-white text-black shadow-lg rounded-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Experience;
  