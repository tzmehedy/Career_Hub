import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
    const [features, setFeatures] = useState([])

    const [dataLoad, setDataLoad] = useState(4)

    useEffect(()=>{
        fetch("../../../public/jobs.json")
          .then((res) => res.json())
          .then((data) => setFeatures(data));
    },[])
    return (
      <div className="flex flex-col justify-center items-center mt-10 space-y-10">
        <div className="text-center space-y-5">
          <h1 className="font-bold text-4xl">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          {features.slice(0, dataLoad).map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>

        <div className={dataLoad === features.length && "hidden"}>
          <div className="text-center mt-10">
            <button
              onClick={() => setDataLoad(features.length)}
              className="btn btn-primary"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    );
};

export default Features;