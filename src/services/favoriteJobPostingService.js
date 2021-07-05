import axios from "axios";

export default class FavoriteJobPostingService{
    getAll(){
        return axios.get("http://localhost:8080/api/favoriteJobPostings/getAll")
    }

    getAllByJobSeekerId(id){
        return axios.get(`http://localhost:8080/api/favoriteJobPostings/getAllByJobSeekerId?id=${id}`)
    }

    getById(id){
        return axios.post(`http://localhost:8080/api/favoriteJobPostings/getById?id=${id}`)
    }

    add(values){
        return axios.post(`http://localhost:8080/api/favoriteJobPostings/add`,values)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/favoriteJobPostings/delete?id=${id}`)
    }
}