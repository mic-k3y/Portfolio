const Skills = () => (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Proficient', skills: 'Python, Java, C#, TensorFlow, JavaScript' },
            { name: 'Familiar', skills: 'C++, Node.js, React, Next.js, Vue, Kubernetes' },
            { name: 'Design', skills: 'HTML, CSS, Tailwind, Figma' },
          ].map((item) => (
            <div
              key={item.name}
              className="p-6 bg-gray-800 text-white shadow-lg rounded-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
              <p>{item.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  