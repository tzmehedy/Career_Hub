

const Banner = () => {
    return (
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center  m-5">
          <div className="flex flex-col space-y-5">
            <h1 className="text-4xl">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-[#9873FF]">Dream Job</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you <br />
              need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary w-52 p-50">Get Started</button>
          </div>
          <div>
            <img className="" src="../../../public/images/user.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;