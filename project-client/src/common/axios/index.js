import axios from 'axios';

const invAxios = axios.create();
invAxios.defaults.baseURL = 'http://localhost:7000/api';

export default invAxios;