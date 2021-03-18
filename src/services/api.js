import axios from 'axios';

//https://api.hgbrasil.com/weather?key=c76ac314&lat=-23.682&lon=-46.875     


export const key = 'c76ac314';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;