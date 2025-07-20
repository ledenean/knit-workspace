import axios from 'axios';
const URL = 'http://localhost:3000';

export async function getProjects() {
    const response = await axios.get(`${URL}/projects`);
    if (response.status === 200) {
        return response.data;
    } else {
        return
    }
}

export async function getProject(id) {
    const response = await axios.get(`${URL}/projects/${id}`);
    
    const post = response.data;
    return post;
}

export async function createProject(project) {
    const response = await axios.post(`${URL}/projects`, project);
    
    return response;
}

export async function updateProject(id, project) {
    const response = await axios.put(`${URL}/projects/${id}`, project);
    
    return response;
}

export async function deleteProject(id) {
    const response = await axios.delete(`${URL}/projects/${id}`);
    
    return response;
}