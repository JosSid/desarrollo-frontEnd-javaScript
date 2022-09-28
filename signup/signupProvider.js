export const createApiUser = async (username, password) => {
    const body = {
        username: username,
        password: password
    }
    await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export const loginApiUser = async (username, password) => {
    const body = {
        username: username,
        password: password
    }
    await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json"
        }
    })
}