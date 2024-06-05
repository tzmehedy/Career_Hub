import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Feature = ({feature}) => {
    const {
      id,
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      job_type,
      salary,
    } = feature;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="w-20 border border-sky-300 rounded mr-2">
              {remote_or_onsite}
            </button>
            <button className="w-20 border border-sky-300 rounded">
              {job_type}
            </button>
          </div>
          <div className="flex space-x-4">
            <h1 className="flex justify-center items-center">
              <MdLocationOn></MdLocationOn>
              {location}
            </h1>
            <h1 className="flex justify-center items-center">
              <AiTwotoneDollar></AiTwotoneDollar>
              {salary}
            </h1>
          </div>

          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}



export default Feature;