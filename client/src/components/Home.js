import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const employees = useLoaderData();
    const [displayEmployees, setDisplayEmployees] = useState(employees);

    // console.log(employees);

    const handleDelete = emp => {
        const agree = window.confirm(`Are you sure you want to delete: ${emp.name}`);

        if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`http://localhost:5000/delete/${emp._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingEmployees = displayEmployees
                            .filter(em => em._id !== emp._id);
                        setDisplayEmployees(remainingEmployees);
                    }
                });
        }
    }



    return (
        <div>
            <h2>Employees: {displayEmployees.length}</h2>
            <div className="">
                {
                    displayEmployees.map(emp => <p key={emp._id} >
                        {emp.name} {emp.email}
                        <Link to={`/update/${emp._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(emp)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;