import axios from "axios";


export default class EmployerUpdateService{

    getAll(){
        return axios.get("http://localhost:8080/api/employerUpdates/getAll")
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/employerUpdates/getById?id=${id}`)
    }

    add(values){
        return axios.post(`http://localhost:8080/api/employerUpdates/add`,values)
    }

    update(id,companyName,website,phone){
        return axios.post(`http://localhost:8080/api/employerUpdates/update?companyName=${companyName}&id=${id}&phone=${phone}&website=${website}`)
    }
}