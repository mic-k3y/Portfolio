const Hero = () => (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-red-500 to-yellow-500 text-white"
    >
      <h1 className="text-6xl font-bold animate-fade-in">Welcome to My Portfolio</h1>
      <p className="text-xl mt-4 max-w-2xl">
        I’m Michael Yilma, a software engineer and machine learning enthusiast passionate about creating impactful
        applications and solving complex problems.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:bg-gray-700 transition-all"
      >
        View My Projects
      </a>
    </section>
  );
  
  export default Hero;
  