import axios from 'axios';

// const usersUrl = 'http://localhost:8080'; // server in java
const usersUrl = 'http://localhost:3002'; // json server: npm run json-server


export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/users/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user) => {
    // return await axios.post(`${usersUrl}/user`, user);
    return await axios.post(`${usersUrl}/users`, user);
}

export const deleteUser = async (id) => {
    // return await axios.delete(`${usersUrl}/user/${id}`);
    return await axios.delete(`${usersUrl}/users/${id}`);
}

export const editUser = async (id, user) => {
    // return await axios.put(`${usersUrl}/user`, user)
    return await axios.put(`${usersUrl}/users/${id}`, user)
}