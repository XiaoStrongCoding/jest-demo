import axios from 'axios'

// export const request = fn => {
//     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
//         fn(res)
//         console.log(res)
//     })
// }

export const request = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}