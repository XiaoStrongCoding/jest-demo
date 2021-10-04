import axios from 'axios'
import { request } from './request'

export const run = fn => {
    return fn('this is run!')
}

export const request = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}