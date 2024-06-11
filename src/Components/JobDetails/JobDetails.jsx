import { useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveStoredJobs } from "../../Utilities/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()

    const idInt = parseInt(id)
    const job = jobs.find((job) => job.id === idInt);

    const handleAppliedJobs =()=>{
      saveStoredJobs(id);
      toast("Successfully Added")
    }
  

    return (
      <div className="container mx-auto ">
        <div className="bg-[url('https://i.ibb.co/fMhwXGs/Vector-1.png')] bg-left-bottom bg-no-repeat flex justify-center items-center h-72">
          <h1 className="text-2xl font-bold">Job Details</h1>
        </div>

        <div className="grid grid-cols-12 mt-10 gap-10">
          <div className="col-span-8 text-justify">
            <p>
              <span className="font-bold">Job Description: </span>
              {job.job_description}
            </p>
            <br />
            <p>
              <span className="font-bold">Job Responsibility</span>
              {job.job_responsibility}
            </p>
            <br />
            <p>
              <span className="font-bold">Education Requirement</span>
              <br />
              {job.educational_requirements}
            </p>
            <br />
            <p>
              <span className="font-bold">Experience</span>
              <br />
              {job.experiences}
            </p>
          </div>
          <div className="col-span-4 bg-gray-100 p-4 rounded-lg space-y-3 mb-10">
            <h3 className="font-bold">Job Details</h3>
            <br />
            <hr />
            <pre className="flex items-center space-x-2">
              <AiTwotoneDollar></AiTwotoneDollar>{" "}
              <span className="font-bold">Salary: </span>
              {job.salary} (per month)
            </pre>
            <pre className="flex items-center space-x-2">
              <img src="https://i.ibb.co/Ry8RH3F/Frame-1.png" alt="" />
              <span className="font-bold">Job Title: </span> {job.job_title}
            </pre>
            <br />
            <h3 className="font-bold">Contact Information</h3>
            <hr />
            <pre className="flex items-center space-x-2">
              <img src="https://i.ibb.co/FwHv9Cv/Frame-2.png" alt="" />
              <span className="font-bold">Phone: </span>{" "}
              {job.contact_information.phone}
            </pre>
            <br />
            <pre className="flex items-center space-x-2">
              <img src="https://i.ibb.co/HhV5BsC/Frame-3.png" alt="" />
              <span className="font-bold">Email: </span>{" "}
              {job.contact_information.email}
            </pre>
            <br />
            <pre className="flex flex-wrap items-center space-x-2">
              <img src="https://i.ibb.co/6Hj0FLC/Frame-4.png" alt="" />
              <span className="font-bold">Address: </span>{" "}
              {job.contact_information.address}
            </pre>
            <br />
            <div className="text-center">
              <button onClick={handleAppliedJobs} className="btn btn-primary">
                Apply Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;