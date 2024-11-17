import React, { useState } from 'react';

const NewProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Example project data
  const projects = [
    {
      id: 1,
      name: 'Solar Energy for Schools',
      description: 'Bringing renewable energy to rural schools.',
      minInvestment: 100,
      plan: '5% annual return on investment over 10 years.',
    },
    {
      id: 2,
      name: 'Reforestation in the Amazon',
      description: 'Planting trees to combat deforestation in the Amazon.',
      minInvestment: 200,
      plan: '10% annual return on investment over 5 years.',
    },
    {
      id: 3,
      name: 'Urban Green Spaces',
      description: 'Developing parks and gardens in urban areas.',
      minInvestment: 50,
      plan: '3% annual return on investment over 15 years.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Explore Projects</h2>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-600">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-600">
                <strong>Minimum Investment:</strong> ${project.minInvestment}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                See More
              </button>
            </div>
          ))}
        </div>

        {/* See More Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-bold text-green-600 mb-4">{selectedProject.name}</h3>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Minimum Investment:</strong> ${selectedProject.minInvestment}
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Plan:</strong> {selectedProject.plan}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProjects;
