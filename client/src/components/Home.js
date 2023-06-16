import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../Service/api';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;


const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);


    const getAllEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    }

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }


    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                 {
                    employees.map((emp) => (
                        <TRow key={emp.id}>
                            <TableCell>{emp._id}</TableCell>
                            <TableCell>{emp.name}</TableCell>
                            <TableCell>{emp.email}</TableCell>
                            <TableCell>{emp.phone}</TableCell>
                            <TableCell>{emp.designation}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${emp._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(emp._id)}>Delete</Button>
                            </TableCell>
                        </TRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
};

export default Home;