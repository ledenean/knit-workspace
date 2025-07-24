import axios from 'axios';
const URL = 'http://localhost:3000';

export async function getAllProjects() {
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

export async function getAllPatterns(){
    const response = await axios.get(`${URL}/patterns`);
    if (response.status === 200) {
        return response.data;
    } else {
        return
    }
}
export async function getPattern(id) {
    const response = await axios.get(`${URL}/patterns/${id}`);
    
    const post = response.data;
    return post;
}

export async function createPattern(pattern) {
    const response = await axios.post(`${URL}/patterns`, pattern);
    
    return response;
}

export async function updatePattern(id, pattern) {
    const response = await axios.put(`${URL}/patterns/${id}`, pattern);
    
    return response;
}

export async function deletePattern(id) {
    const response = await axios.delete(`${URL}/patterns/${id}`);
    
    return response;
}