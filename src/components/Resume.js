import React from 'react';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Engineering in Software Engineering",
      school: "Carlerton University",
      year: "2023 - 2028",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    }
  ];

  const experience = [
    {
      title: "Subway Employee",
      company: "Swbway",
      period: "2023 - 2024",
      responsibilities: [
        "Responsible for preparation for Items that will be used up",
        "Kept track of inventory and restiocked when needed",
        "Handled customers via making subs and taking payments"
      ]
    }
  ];

  const skills = {
    "Frontend": ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "REST APIs"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL"],
    "Tools": ["Git", "Docker", "AWS", "VS Code"]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Resume</h1>
          <p className="text-gray-600 text-lg mb-6">Full Stack Developer</p>
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Download PDF
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-blue-600 font-semibold">{edu.school}</p>
              <p className="text-gray-500 mb-2">{edu.year}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-blue-600 font-semibold">{exp.company}</p>
              <p className="text-gray-500 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;