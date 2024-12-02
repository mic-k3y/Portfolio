const SkillsCourses = () => {
  const courses = [
    'Data Structures and Algorithms',
    'Computer Vision',
    'Neural Networks',
    'Analysis of Algorithms',
    'Software Engineering',
    'Operating Systems',
    'Object-Oriented Programming',
    'Data Visualization and Analysis',
  ];

  const tools = [
    'Python',
    'Java',
    'C#',
    'JavaScript/TypeScript',
    'C',
    'TensorFlow',
    'C++',
    'NodeJS',
    'React',
    'Next.js',
    'Vue',
    'Kubernetes',
    'HTML/CSS',
    'PyTorch',
  ];

  return (
    <section id="skills" className="min-h-screen bg-white text-blue-900 px-6 py-16">
      <div className="max-w-7xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-12">Technical Skills and Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 shadow-md hover:bg-yellow-400 hover:scale-105 text-center transition-all duration-300"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 shadow-md hover:bg-yellow-400 hover:scale-105 text-center transition-all duration-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCourses;
