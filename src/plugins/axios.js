import axios from 'axios'

const api = axios.create({
  baseURL: 'https://back-hackathon-dev-nhbx.4.us-1.fl0.io/api/'
})


export default api;