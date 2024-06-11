import PropTypes from "prop-types";
const AppliedJob = ({ storejob }) => {
  const { logo } = storejob;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  storejob: PropTypes.object
};

export default AppliedJob;
