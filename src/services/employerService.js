import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`)
    }

    update(id,companyName,website,phone){
        return axios.post(`http://localhost:8080/api/employers/update?companyName=${companyName}&id=${id}&phone=${phone}&website=${website}`)
    }
}