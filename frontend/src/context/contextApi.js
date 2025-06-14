import axios from "axios";

//const url = "http://localhost:8000";
const url = "https://travel-d9kw.onrender.com";
const fetchDestination = async () => {
    const response = await axios.get(url+"/api/destination");
    console.log(response.data.data);
    return response.data.data;
};

const fetchTopSellingPackages = async () => {
    const response = await axios.get(url+"/api/packages/top-selling");
    console.log(response.data.data);
    return response.data.data;
};

export {fetchDestination, fetchTopSellingPackages};