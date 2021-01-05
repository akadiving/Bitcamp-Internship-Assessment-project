import axios from 'axios'

const getAPI = axios.create({
    // Creates axios instance to get root api
    baseURL: 'https://api.github.com/users?since=0&per_page=20&page=1',
    timeout: 1000,
});

export { getAPI }