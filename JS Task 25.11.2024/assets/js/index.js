import { baseURL } from "./api/constants.js";

import { showBlogs } from "./api/services.js";


async function getData() {
    const response = await axios.get(`${baseURL}/blogs`);
    // console.log(response.data);
    showBlogs(response);
}

getData();