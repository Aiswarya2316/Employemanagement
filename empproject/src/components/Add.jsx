import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [experiance, setExperiance] = useState(''); // Fixed spelling

    const [message, setMessage] = useState(''); // For feedback

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/', {
            name,
            address,
            position,
            salary,
            experiance // Use consistent variable name
        })
        .then(response => {
            console.log(response.data);
            setMessage('Employee added successfully!');
            // Clear form fields
            setName('');
            setAddress('');
            setPosition('');
            setSalary('');
            setExperiance(''); // Clear experience field
        })
        .catch(error => {
            console.error(error);
            setMessage('Error adding employee. Please try again.');
        });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-info'><u>Add Employee</u></h2>
                <div>
                    <label className='text-dark'>Name</label>
                    <input
                        className='form-control'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required // Added required attribute
                    />
                </div>
                <div className='mt-2'>
                    <label>Address</label>
                    <textarea
                        className='form-control'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required // Added required attribute
                    />
                </div>
                <div className='mt-2'>
                    <label>Position</label>
                    <input
                        className='form-control'
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required // Added required attribute
                    />
                </div>
                <div className='mt-2'>
                    <label className='text-dark'>Salary</label>
                    <input
                        className='form-control'
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required // Added required attribute
                    />
                </div>
                <div className='mt-2'>
                    <label className='text-dark'>Experiance (in years)</label>
                    <input
                        className='form-control'
                        type="number"
                        value={experiance}
                        onChange={(e) => setExperiance(e.target.value)}
                        required // Added required attribute
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Insert</button>
                {message && <div className='mt-2'>{message}</div>} {/* Feedback message */}
            </form>
        </div>
    );
};

export default Add;
