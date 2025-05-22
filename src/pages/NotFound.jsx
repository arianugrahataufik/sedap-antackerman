import PageHeader from "../components/PageHeader"
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-10 text-center">
        <FaExclamationTriangle className="text-6xl text-hijau mb-6" />
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500 mt-2">It might have been moved or deleted.</p>
  
        <Link
          to="/"
          className="mt-6 inline-block bg-hijau hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-300"
        >
          Back to Dashboard
        </Link>
  
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="404 Not Found"
          className="mt-10 w-80"
        />
      </div>
    );
}