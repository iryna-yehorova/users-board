const axios = require('axios')

const http = axios.create(
    {
        baseURL: 'https://reqres.in/api/'
    }
)

async function getUsers() {
    try { 
        const response = await http.get('users', {
            params: {
                per_page: 5
            }
        })
        return response.data.data.map(item => {
            return {
                id: item.id,
                name: `${item.first_name} ${item.last_name}`
            }
        })
    } catch(err) {
        throw new Error(err.text)
    }
}

async function createNewUser(user) {
    try {
        const response = await http.post('users', user)
        return response
    } catch(err) {
        throw new Error(err.text)
    }
}

export {
    getUsers,
    createNewUser
}