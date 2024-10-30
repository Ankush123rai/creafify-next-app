"use client"

import { SetStateAction, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';

const dummyProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web development',
    image: 'https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A modern e-commerce platform with advanced shopping cart and payment integrations.',
  },
  {
    id: 2,
    title: 'Learning Management System (LMS)',
    category: 'Applications',
    image: 'https://ambcelearn.com/assets/image/webwork-time-tracker%201.png',
    description: 'An LMS solution offering course management, tracking, and student engagement tools.',
  },
  {
    id: 3,
    title: 'Gym Website',
    category: 'Web design',
    image: 'https://s3-alpha.figma.com/hub/file/3374926997/e418473a-06fc-45ee-9319-ea42dc238b67-cover.png',
    description: 'A dynamic website for a gym, featuring class schedules, membership details, and trainer profiles.',
  },
  {
    id: 4,
    title: 'Car Rent Website',
    category: 'Web design',
    image: '/image/car-rent.png',
    description: 'A car rental website where users can view and rent their favorite cars.',
  },
  {
    id: 5,
    title: 'Inventory Management System',
    category: 'Applications',
    image: 'https://cdn.dribbble.com/userupload/14756365/file/original-eb6a291bce62342aab293d3de4f9bc9d.png?resize=1200x900&vertical=center',
    description: 'A comprehensive tool for tracking stock, orders, and suppliers in real-time.',
  },
  {
    id: 6,
    title: 'Business Analytics Dashboard',
    category: 'Web development',
    image: 'https://www.zohowebstatic.com/sites/zweb/images/analytics/analytics-dashbboard-zia.png',
    description: 'A data analytics dashboard with powerful visualization tools for business insights.',
  },
];

const Projects = () => {
  const [projects] = useState(dummyProjects);
  const [filteredProjects, setFilteredProjects] = useState(dummyProjects);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section className="portfolio py-12 sm:px-10 px-5 bg-yellow-900">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
      </header>

      <ul className="flex justify-center space-x-4 mb-8">
        {['All', 'Web design', 'Applications', 'Web development'].map(category => (
          <li key={category}>
            <button
              className={`sm:px-4 px-2 sm:py-2 py-1 sm:text-[16px] text-[8px] rounded-lg uppercase ${
                category === selectedCategory ? 'bg-gradient-to-r from-black via-gray-700 to-black bg-size-200 animate-gradient-move p-3 rounded-lg w-full focus:outline-none focus:shadow-outline text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <section className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item bg-white shadow-lg rounded-lg overflow-hidden">
            <a href="#" className="block relative">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
                  <FaRegEye className="text-white text-3xl" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-500">{project.category}</p>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;

