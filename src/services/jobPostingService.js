import axios from "axios"

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPostings/getAll")
    }  

    add(values){
        return axios.post("http://localhost:8080/api/jobPostings/add",values)
    }
}