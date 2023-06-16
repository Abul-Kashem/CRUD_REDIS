import axios from 'axios'

const employeesUrl = 'http://localhost:5000';

export const getEmployees = async (id) => {

    id = id || '';
    return await axios.get(`${employeesUrl}/${id}`);
}

export const addEmployee = async (employee) => {
    return await axios.post(`${employeesUrl}/add`, employee);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${employeesUrl}/${id}`);
}

export const editEmployee = async (id, employee) => {
    return await axios.put(`${employeesUrl}/${id}`, employee);
}