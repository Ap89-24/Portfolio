import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => {
  return (
 <div>
      <p className="sm:leading-snug sm:text-lg font-medium leading-snug bg-blue-700 text-white text-center px-6 py-6 rounded-2xl  max-w-md mx-auto shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out flex items-center justify-center -mt-20">
        {text}
      </p>
      <Link
        to={link}
        className="w-fit bg-white text-blue-700 font-semibold py-2 px-15 rounded-2xl hover:bg-blue-300 transition-colors duration-300 text-center -mt-3 mx-auto block"
      >
        <div className="flex items-center gap-2">
        {btnText}  
      <img src={arrow} className="w-4 h-4"/>
      </div>
      </Link>
    </div>
  );
};

export default InfoBox;

