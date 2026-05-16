import { Link } from "react-router-dom";

const AccommodationCard = ({ image, title, rooms, beds, extraBeds, slug }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover mb-14 rounded-2xl"
      />

      <div className="absolute left-0 right-0 bottom-0 flex justify-center">
        <div className="bg-white w-4/5 px-4 py-3 shadow-md hover:shadow-lg">
          <Link to={`/accommodation/${slug}`} className="group">
            <h2 className="relative inline-block text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-700">
              {title}
              <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </Link>
          <p className="text-gray-500 text-sm">{rooms}</p>
          <p className="text-gray-500 text-sm">
            {beds} <span className="px-1">+</span> {extraBeds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
