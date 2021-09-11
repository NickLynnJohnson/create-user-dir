import axios from "axios";

const RandomAPI = {
    searchList: function() {
      return axios.get("https://randomuser.me/api/?results=15");
    }
  };

export default RandomAPI;