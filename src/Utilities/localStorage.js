
const getStoredJobs = () =>{
    const storedJobs = localStorage.getItem('jobApplications')

    if(storedJobs){
        return JSON.parse(storedJobs);
    }
    return []
}

const saveStoredJobs = (id) =>{

    const storedJobs = getStoredJobs()


    const exist = storedJobs.find(jobId => jobId === id)

    if(!exist){
        storedJobs.push(id)
        localStorage.setItem("jobApplications", JSON.stringify(storedJobs));
    }

}

export { getStoredJobs, saveStoredJobs };