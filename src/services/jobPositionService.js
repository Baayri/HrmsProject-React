import axios from "axios";

export default class JobPositionServie{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobs/getAll")
    }
}