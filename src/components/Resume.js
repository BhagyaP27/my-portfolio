import React from 'react';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Engineering - Software Engineering (Co-op Option)",
      school: "Carleton University",
      location: "Ottawa, ON",
      year: "Sept. 2023 - Apr. 2028 (Expected)",
      gpa: "GPA: 8.5/12 (B)",
      description: ""
    }
  ];

  const experience = [
    {
      title: "Grocery Worker",
      company: "Food Basics",
      location: "Pembroke, ON",
      period: "Mar. 2023 - July 2023",
      responsibilities: [
        "Organized products, handled multiple departments, and ensured scheduled tasks were completed",
        "Assisted customers by answering questions and providing support"
      ]
    },
    {
      title: "Sandwich Artist",
      company: "Subway",
      location: "Pembroke, ON",
      period: "June 2019 - Jan 2020",
      responsibilities: [
        "Prepared sandwiches as per order and handled cash transactions",
        "Reviewed and organized food material stock"
      ]
    },
    {
      title: "Library Staff",
      company: "Pembroke Public Library",
      location: "Pembroke, ON",
      period: "June 2019 - Aug 2019",
      responsibilities: [
        "Organized books in the database to improve accessibility",
        "Assisted in community events and helped visitors find resources"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Personality Segmentation",
      description: "Performed end-to-end customer segmentation analysis to group customers based on purchasing behavior and demographics",
      technologies: ["Python", "pandas", "NumPy", "Scikit-learn", "K-Means", "PCA", "Elbow Method", "Silhouette Score"]
    },
    {
      title: "Potential Customers Prediction",
      description: "Developed a machine learning classification model to predict potential customers from behavioral and demographic data",
      technologies: ["Python", "EDA", "OneHotEncoder", "Logistic Regression", "Decision Trees", "Random Forests", "Gradient Boosting"]
    },
    {
      title: "Large Data Processing and Graphing Project",
      description: "Built a data processing tool using Python and OOP (polymorphism, inheritance, abstraction), processed 500,230 dataset, created graphs with multiple libraries",
      technologies: ["Python", "OOP", "Data Manipulation", "Graphing Libraries"]
    },
    {
      title: "Digital Resume Website",
      description: "Designed and built a basic resume website using HTML, CSS, and JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const skills = {
    "Technical Skills": [
      "Python (OOP, file handling)",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Excel (data analysis)",
      "Raspberry Pi programming",
      "PuTTY/WinSCP",
      "Unity"
    ],
    "Programming Languages": [
      "Python",
      "C",
      "C#",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "React"
    ],
    "Data Science & ML": [
      "pandas",
      "NumPy",
      "Scikit-learn",
      "K-Means clustering",
      "PCA",
      "Logistic Regression",
      "Decision Trees",
      "Random Forests"
    ],
    "Communication Skills": [
      "Technical presentations",
      "Team collaboration",
      "Dataset analysis & presentation",
      "Fluent in English/Hindi/Gujarati",
      "Basic German"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Bhagya Patel</h1>
          <p className="text-xl text-gray-700 mb-4">Software Engineering Student</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-6">
            <a href="mailto:bhagyapatel000@gmail.com" className="hover:text-blue-600">
              📧 bhagyapatel000@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/in/bhagyapatel305" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/BhagyaP27" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-semibold">{edu.school}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">{edu.location}</p>
                  <p className="text-gray-500">{edu.year}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{edu.gpa}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Skills & Accomplishments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span 
                      key={idx}
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

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Work Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">{exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-600 pb-2">
            Applied Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg font-semibold"
          >
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;