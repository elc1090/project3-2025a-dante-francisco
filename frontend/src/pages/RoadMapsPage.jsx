import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const fakeRoadmaps = [
  { _id: '1', title: 'Como se tornar Frontend Developer', description: '...' },
  { _id: '2', title: 'Desenvolvimento Mobile', description: '...' },
  { _id: '3', title: 'DevOps Essentials', description: '...' },
  { _id: '4', title: 'Backend Developer', description: '...' },
  { _id: '5', title: 'Fullstack Developer', description: '...' },
  { _id: '6', title: 'Data Science', description: '...' },
  { _id: '7', title: 'Machine Learning', description: '...' },
  { _id: '8', title: 'IA Generativa', description: '...' },
  { _id: '9', title: 'Cibersegurança', description: '...' },
  { _id: '10', title: 'Blockchain', description: '...' },
  { _id: '11', title: 'Game Development', description: '...' },
  { _id: '12', title: 'Cloud Computing', description: '...' },
];

const RoadMapsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoadmaps = fakeRoadmaps.filter((roadmap) =>
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Campo de busca */}
      <div className="max-w-3xl mx-auto px-4 mt-20">
        <input
          type="text"
          placeholder="Buscar roadmap..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* Lista de roadmaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4">
        {filteredRoadmaps.map((roadmap) => (
          <Link
            key={roadmap._id}
            to={`/roadmaps/${roadmap._id}`}
            className="bg-gray-800 hover:bg-indigo-600 text-white text-base font-semibold py-6 px-4 rounded-xl shadow-md transition duration-300 cursor-pointer text-center"
          >
            {roadmap.title}
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default RoadMapsPage;
