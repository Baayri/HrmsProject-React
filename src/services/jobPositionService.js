import axios from "axios";

export default class JobPositionServie{
    getJobPosition(){
        return axios.get("http://localhost:8080/api/jobs/getall")
    }
}