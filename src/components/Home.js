import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I build modern web applications with React, Node.js, and other cutting-edge technologies.
            Passionate about creating clean, efficient, and user-friendly solutions.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'C', 'C#', 'Git',].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1">
                <p className="font-semibold text-gray-800 text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Preview */}
        <div className="mt-20 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a passionate developer with experience in building scalable web applications. 
            I love solving complex problems and learning new technologies. When I'm not coding, 
            you can find me contributing to open-source projects or writing technical blog posts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;