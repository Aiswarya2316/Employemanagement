// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Display = () => {
//     const [tasks, setTasks] = useState([]);
//     const [sertasks, setSerTasks] = useState([]);
//     const [filteredtasks, setFilteredTasks] = useState([]);
//     const [editing, setEditing] = useState(false);
//     const [currentTask, setCurrentTask] = useState({ id: null, name: '', address: '', position: '', salary: '', experiance: '' });

//     useEffect(() => {
//         axios.get('https://alan2325.pythonanywhere.com/employe/employees/')
//             .then(response =>  {
//                 setTasks(response.data)
//                 setFilteredTasks(response.data)
//             })
//             .catch(error => console.log(error));
//     }, []);

//     const editTask = (task) => {
//         setEditing(true);
//         setCurrentTask(task);
//     };

//     const updateTask = (id, updateTask) => {
//         setEditing(false);
//         axios.put(`https://alan2325.pythonanywhere.com/employe/employees/${id}/`, updateTask)
//             .then(response => {
//                 setTasks(tasks.map(task => (task.id === id ? response.data : task)));
//             })
//             .catch(error => console.log(error));
//     };

//     const deleteTask = (task) => {
//         axios.delete(`https://alan2325.pythonanywhere.com/employe/employees/${task.id}/`)
//             .then(() => {
//                 setTasks(tasks.filter(t => t.id !== task.id));
//             })
//             .catch(error => console.log(error));
//     };

//     useEffect(()=>{
//         const result=tasks.filter(t=>
//             t.name.includes(sertasks)
//         )
//         setFilteredTasks(result)
//     },[sertasks,tasks])

//     return (
//         <div className='container mt-3'>
//             <h2>Task List</h2>
//             <input type="text" placeholder='Search' value={sertasks} onChange={(e)=>setSerTasks(e.target.value)} />
//             <table className='table table-primary table-border table-hover'>
//                 <thead>
//                     <tr>
//                         <th>Emp ID</th>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>Position</th>
//                         <th>Salary</th>
//                         <th>Experience</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.map(task => (
//                         <tr key={task.id}>
//                             <td>{task.empid}</td>
//                             <td>{task.name}</td>
//                             <td>{task.address}</td>
//                             <td>{task.position}</td>
//                             <td>{task.salary}</td>
//                             <td>{task.experiance}</td>
//                             <td>{task.email}</td>
//                             <td>{task.phone}</td>
//                             <td>
//                                 <button className='btn btn-warning px-3' onClick={() => editTask(task)}>Edit</button>
//                                 <button className='btn btn-info' onClick={() => deleteTask(task)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {editing && (
//                 <EditTaskForm
//                     currentTask={currentTask}
//                     updateTask={updateTask}
//                 />
//             )}
//         </div>
//     );
// };

// const EditTaskForm = ({ currentTask, updateTask }) => {
//     const [task, setTask] = useState(currentTask);
//     // document.getElementById("container mt-3").style.display = "none";


//     useEffect(() => {
//         setTask(currentTask);
//     }, [currentTask]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setTask({ ...task, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateTask(task.id, task);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Edit Task</h2>
//             <div>
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={task.name}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Address</label>
//                 <input
//                     type="text"
//                     name="address"
//                     value={task.address}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Position</label>
//                 <input
//                     type="text"
//                     name="position"
//                     value={task.position}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Salary</label>
//                 <input
//                     type="number"
//                     name="salary"
//                     value={task.salary}
//                     onChange={handleInputChange}
//                 />
//             </div>
           
//             <button type="submit">Update</button>
//         </form>
//     );
// };

// export default Display;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Display = () => {
//     const [tasks, setTasks] = useState([]);
//     const [sertasks, setSerTasks] = useState('');
//     const [filteredtasks, setFilteredTasks] = useState([]);
//     const [editing, setEditing] = useState(false);
//     const [currentTask, setCurrentTask] = useState({ id: null, name: '', address: '', position: '', salary: '', experiance: '' });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://alan2325.pythonanywhere.com/employe/employees/');
//                 setTasks(response.data);
//                 setFilteredTasks(response.data);
//             } catch (err) {
//                 setError('Error fetching data');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         setFilteredTasks(
//             tasks.filter(task => 
//                 task.name.toLowerCase().includes(sertasks.toLowerCase())
//             )
//         );
//     }, [sertasks, tasks]);

//     const editTask = (task) => {
//         setEditing(true);
//         setCurrentTask(task);
//     };

//     const updateTask = async (id, updateTask) => {
//         setEditing(false);
//         try {
//             const response = await axios.put(`https://alan2325.pythonanywhere.com/employe/employees/${id}/`, updateTask);
//             setTasks(tasks.map(task => (task.id === id ? response.data : task)));
//         } catch (error) {
//             setError('Error updating task');
//         }
//     };

//     const deleteTask = async (task) => {
//         try {
//             await axios.delete(`https://alan2325.pythonanywhere.com/employe/employees/${task.id}/`);
//             setTasks(tasks.filter(t => t.id !== task.id));
//         } catch (error) {
//             setError('Error deleting task');
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className='container mt-3'>
//             <h2>Task List</h2>
//             <input type="text" placeholder='Search' value={sertasks} onChange={(e) => setSerTasks(e.target.value)} />
//             <table className='table table-primary table-border table-hover'>
//                 <thead>
//                     <tr>
//                         <th>Emp ID</th>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>Position</th>
//                         <th>Salary</th>
//                         <th>Experience</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredtasks.map(task => (
//                         <tr key={task.id}>
//                             <td>{task.empid}</td>
//                             <td>{task.name}</td>
//                             <td>{task.address}</td>
//                             <td>{task.position}</td>
//                             <td>{task.salary}</td>
//                             <td>{task.experiance}</td>
//                             <td>{task.email}</td>
//                             <td>{task.phone}</td>
//                             <td>
//                                 <button className='btn btn-warning px-3' onClick={() => editTask(task)}>Edit</button>
//                                 <button className='btn btn-info' onClick={() => deleteTask(task)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {editing && (
//                 <EditTaskForm
//                     currentTask={currentTask}
//                     updateTask={updateTask}
//                 />
//             )}
//         </div>
//     );
// };

// const EditTaskForm = ({ currentTask, updateTask }) => {
//     const [task, setTask] = useState(currentTask);

//     useEffect(() => {
//         setTask(currentTask);
//     }, [currentTask]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setTask({ ...task, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateTask(task.id, task);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Edit Task</h2>
//             <div>
//                 <label>Name</label>
//                 <input type="text" name="name" value={task.name} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Address</label>
//                 <input type="text" name="address" value={task.address} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Position</label>
//                 <input type="text" name="position" value={task.position} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Salary</label>
//                 <input type="number" name="salary" value={task.salary} onChange={handleInputChange} />
//             </div>
//             <button type="submit">Update</button>
//         </form>
//     );
// };

// export default Display;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
    const [tasks, setTasks] = useState([]);
    const [sertasks, setSerTasks] = useState('');
    const [filteredtasks, setFilteredTasks] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({ id: null, name: '', address: '', position: '', salary: '', experiance: '', email: '', phone: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://alan2325.pythonanywhere.com/employe/employees/');
                setTasks(response.data);
                setFilteredTasks(response.data);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const lowerCaseSearch = sertasks.toLowerCase();
        setFilteredTasks(
            tasks.filter(task => 
                task.name.toLowerCase().includes(lowerCaseSearch) ||
                task.position.toLowerCase().includes(lowerCaseSearch) ||
                task.email.toLowerCase().includes(lowerCaseSearch)
            )
        );
    }, [sertasks, tasks]);

    const editTask = (task) => {
        setEditing(true);
        setCurrentTask(task);
    };

    const updateTask = async (id, updateTask) => {
        setEditing(false);
        try {
            const response = await axios.put(`https://alan2325.pythonanywhere.com/employe/employees/${id}/`, updateTask);
            setTasks(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            setError('Error updating task');
        }
    };

    const deleteTask = async (task) => {
        try {
            await axios.delete(`https://alan2325.pythonanywhere.com/employe/employees/${task.id}/`);
            setTasks(tasks.filter(t => t.id !== task.id));
        } catch (error) {
            setError('Error deleting task');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='container mt-3'>
            <h2>Task List</h2>
            <input
                type="text"
                placeholder='Search'
                value={sertasks}
                onChange={(e) => setSerTasks(e.target.value)}
            />
            <table className='table table-primary table-border table-hover'>
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredtasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.empid}</td>
                            <td>{task.name}</td>
                            <td>{task.address}</td>
                            <td>{task.position}</td>
                            <td>{task.salary}</td>
                            <td>{task.experiance}</td>
                            <td>{task.email}</td>
                            <td>{task.phone}</td>
                            <td>
                                <button className='btn btn-warning px-3' onClick={() => editTask(task)}>Edit</button>
                                <button className='btn btn-info' onClick={() => deleteTask(task)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editing && (
                <EditTaskForm
                    currentTask={currentTask}
                    updateTask={updateTask}
                />
            )}
        </div>
    );
};

const EditTaskForm = ({ currentTask, updateTask }) => {
    const [task, setTask] = useState(currentTask);

    useEffect(() => {
        setTask(currentTask);
    }, [currentTask]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task.id, task);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={task.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Address</label>
                <input type="text" name="address" value={task.address} onChange={handleInputChange} />
            </div>
            <div>
                <label>Position</label>
                <input type="text" name="position" value={task.position} onChange={handleInputChange} />
            </div>
            <div>
                <label>Salary</label>
                <input type="number" name="salary" value={task.salary} onChange={handleInputChange} />
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default Display;
