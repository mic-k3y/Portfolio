'use client';

import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'STEP Intern',
      company: 'Google, Sunnyvale, CA',
      date: 'May 2024 – August 2024',
      tech: 'Python, TensorFlow, Keras',
      details: [
        'Developed a machine learning(ML) solution for the Spanner team at Google Cloud to predict and flag risky code changes or potential system-level test failures before execution, increasing overall presubmit testing rate.',
        'Trained and tested 7 different large language models (LLMs), exploring zero-shot, few-shot, and fine-tuning techniques to optimize performance.',
        'Designed and implemented a data pipeline process to efficiently gather additional data points for future use cases, enhancing the robustness and scalability of the testing framework.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'SureStart AI Trailblazer, Waterville, ME',
      date: 'June 2023 – August 2023',
      tech: 'Python, TensorFlow, Numpy, Pandas, Keras',
      details: [
        'Engaged in an on-site orientation and comprehensive curriculum in Machine Learning.',
        'Worked with a team to design, build, test, and evaluate a text-to-3D Generative AI Model.',
        'Built the Neural Radiance Fields (NeRF) and integrated it with diffusion models to generate 3D models from text.',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'Colby Computer Science Department, Waterville, ME',
      date: 'February 2023 – Present',
      tech: 'C, C++, Python',
      details: [
        'Hold weekly office hours and offer code reviews and constructive feedback for CS333 Programming Languages course.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="min-h-screen bg-blue-800 text-white px-6 py-16"
    >
      <div
        className={`max-w-7xl mx-auto ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        } transition-all duration-1000`}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-blue-700 shadow-md hover:bg-yellow-400 hover:text-blue-900 hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="font-medium">{exp.company}</p>
              <p className="italic text-sm mb-4">{exp.date}</p>
              <p className="text-sm mb-4">{exp.tech}</p>
              <ul className="list-disc ml-6 text-sm space-y-2">
                {exp.details.map((detail, i) => (
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

export default Experience;
