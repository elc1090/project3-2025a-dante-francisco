import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';


const fakeRoadmaps = [
  { _id: '1', title: 'Como se tornar Frontend Developer', description: '...' },
  { _id: '2', title: 'Desenvolvimento Mobile', description: '...' },
  { _id: '3', title: 'DevOps Essentials', description: '...' },
];

const RoadMapsPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4">
        {fakeRoadmaps.map((roadmap) => (
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
  )
}

export default RoadMapsPage;
