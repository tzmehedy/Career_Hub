import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [storeJobs, setStoreJobs] = useState([])

    useEffect(() => {
      const storedIds = getStoredJobs();
      if (jobs.length > 0) {
        const storeJobs = jobs.filter((job) => storedIds.includes(job.id));
        setStoreJobs(storeJobs)
      }
    }, [jobs]);
    return (
      <div>
        {storeJobs.map((storejob) => (
          <AppliedJob storejob={storejob} key={storejob.id}></AppliedJob>
        ))}
      </div>
    );
};

export default AppliedJobs;