import axios from "axios";

const baseURL = "https://randomuser.me/api/?results=200&nat=us";

const RandomAPI = () => {
    return axios.get(baseURL);
}

export default RandomAPI;

