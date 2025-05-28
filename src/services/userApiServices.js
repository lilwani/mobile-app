import axios from 'axios'

export async function userLogin(data) {
    const url = 'http://localhost:4040/users/login'
    const header = {
        'content-type': 'application/json',
    }
    const res = await axios.post(url, data, header)
    console.log(res)
}
