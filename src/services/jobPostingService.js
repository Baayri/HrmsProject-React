import axios from "axios"

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPostings/getAll")
    }
    
    getJobPostingsByActive(){
        return axios.get("http://localhost:8080/api/jobPostings/getAllByActive")
    }

    getJobPostingsByInActive(){
        return axios.get("http://localhost:8080/api/jobPostings/getAllByInActive")
    }

    updateByActive(id,isConfirmed){
        return axios.post("http://localhost:8080/api/jobPostings/updateIsActive?id="+id+"&isActive="+isConfirmed)
    }

    getAllByCity(cityName){
        return axios.post(`http://localhost:8080/api/jobPostings/getAllByCity?cityName=${cityName}`)
    }

    getAllByJob(title){
        return axios.post(`http://localhost:8080/api/jobPostings/getAllByJob?title=${title}`)
    }

    getAllByWorkTime(workTime){
        return axios.post(`http://localhost:8080/api/jobPostings/getAllByWorkTime?workTime=${workTime}`)
    }

    getAllByWorkType(workType){
        return axios.post(`http://localhost:8080/api/jobPostings/getAllByWorkType?workType=${workType}`)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobPostings/add",values)
    }
}