import React, { useEffect, useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployees, editEmployee } from '../Service/api';


// name
// email
// phone
// designation


const initialValue = {
    name: '',
    email: '',
    phone: '',
    designation: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditEmployee = () => {

    const [employee, setEmployee] = useState(initialValue);
    const { name, email, phone, designation } = employee;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadEmployeeDetails();
    }, [])

    const loadEmployeeDetails = async () => {
        const response = await getEmployees(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = async () => {
        await editEmployee(id, employee);
        navigate('/all');
    }

    const onValueChange = (e) => {
        setEmployee(
            {
                ...employee, [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div>
            <Container injectFirst>
                <Typography variant='h4'>Edit Employee</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Designation</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='designation' value={designation} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit Employee</Button>
                </FormControl>
            </Container>
        </div>
    );
};

export default EditEmployee;