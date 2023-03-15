import axios from 'axios';

const serverURL = 'http://localhost:3000'

const API = {
    getCourse: function(param) {
        return axios.get(`${serverURL}/courses/courselist/${param}`);
    },
    getSchedule: function(){
        return axios.get(`${serverURL}/courses/schedules`)
    },
    createSchedule: function(payload){
        return axios.post(`${serverURL}/courses/schedules`, payload);
    }
}
export default API;

