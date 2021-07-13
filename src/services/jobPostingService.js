import axios from "axios"

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPostings/getAll")
    }

    getAllByPage(pageNo,pageSize){
        return axios.post(`http://localhost:8080/api/jobPostings/getAllByPage?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/jobPostings/getById?id=${id}`)
    }
    
    getJobPostingsByActive(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobPostings/getAllByActive?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    getJobPostingsByInActive(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobPostings/getAllByInActive?pageNo=${pageNo}&pageSize=${pageSize}`)
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