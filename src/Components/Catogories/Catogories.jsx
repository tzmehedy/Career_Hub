import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Catogories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("/public/categories.json")
        .then((res) =>res.json()
        .then((data) => setCategories(data))
        );
    },[])
    return (
      <div className="mt-10">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 m-5 gap-5 ">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    );
};

export default Catogories;