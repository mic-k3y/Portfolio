const Projects = () => (
    <section id="projects" className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-bold">VidSnap.ai</h3>
            <p>
              A chatbot that answers questions on YouTube videos using ChatGPT API.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Atoll Segmentation CV Model</h3>
            <p>
              U-NET architecture for satellite image segmentation with an F1 score of ~86%.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Schelling’s Model of Segregation</h3>
            <p>
              Simulated residential segregation dynamics using computational models.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
  
  export default Projects;
  