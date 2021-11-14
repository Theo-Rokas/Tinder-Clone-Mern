import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tr-tinder-mern-backend.herokuapp.com',
})

export default instance