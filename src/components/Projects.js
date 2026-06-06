import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projectData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Expanded Markdown Detail View
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <button 
            onClick={() => setSelectedProject(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
          >
            ← Back to all projects
          </button>
          
          <article className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
            {selectedProject.image && (
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 border border-gray-100"
              />
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              {selectedProject.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-600 italic mb-8 border-l-4 border-blue-500 pl-4">
              {selectedProject.description}
            </p>

            {/* Links Block */}
            <div className="flex gap-4 mb-8 bg-gray-50 p-4 rounded-xl">
              {selectedProject.github && (
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                >
                  View Code on GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
                >
                  Live Demo →
                </a>
              )}
            </div>
            
            {/* Project Markdown Body */}
            <div className="text-gray-800 leading-relaxed space-y-4">
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2" {...props} />,
                  p: ({ node, ...props }) => <p className="text-gray-700 mb-4" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-gray-700" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside pl-4 mb-4 space-y-1 text-gray-700" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                  code: ({ node, inline, ...props }) => (
                    <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                  )
                }}
              >
                {selectedProject.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Grid Grid View
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 tracking-tight">
          My Projects
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Here are some of my recent works and side projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48 bg-gray-100 border-b border-gray-100">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-mono">
                    No preview image
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-gray-50 text-sm font-semibold text-blue-600">
                  <span>View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;