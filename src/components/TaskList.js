import React, { useState, useEffect } from 'react';
import { Stack, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import CheckCircleIcon from '../assets/icons/CheckCircleIcon';
import DotIcon from '../assets/icons/DotIcon';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/tasks/`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data from API:', data);
            setTasks(data);
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    }, []);


    const deleteTask = (taskId) => {
        fetch(`${apiUrl}/tasks/${taskId}/delete/`, {
        method: 'DELETE',
        })
        .then(() => {
            setTasks(tasks.filter((task) => task.id !== taskId));
        })
        .catch((error) => console.error('Error deleting task:', error));
    };

    return (
        <div>
        <Accordion style={{ opacity: 0.9 }} className='mt-3' defaultActiveKey={['0']} alwaysOpen>
            {tasks.length > 0 ? (
            (function() {
                const accordionItems = [];
                for (let i = tasks.length-1; i >= 0; i--) {
                const task = tasks[i];
                accordionItems.push(
                    <Accordion.Item key={task.id} eventKey={task.id.toString()}>
                    <Accordion.Header><CheckCircleIcon />{task.task_name}<DotIcon /></Accordion.Header>
                    <Accordion.Body>
                        <p><b>Completed: </b>{task.completed}</p>
                        <p><b>Created At: </b>{task.created_at}</p>
                        <Button
                            style={{ width: '100%', background: '#ffcece', color: '#f85050', borderRadius: '10px' }}
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </Button>
                    </Accordion.Body>
                    </Accordion.Item>
                );
                }
                return accordionItems;
            })()
            ) : (
                <Stack
                    style={{
                        width: '100%',
                        minHeight: '25vh',
                        textAlign: 'center',
                        background: 'white',
                        color: 'black',
                        opacity: 0.75,
                        justifyContent: 'center',
                        borderRadius: '10px'
                    }}>
                    <p>No task today</p>
                </Stack>
            )}
        </Accordion>
        </div>
    );  
}

export default TaskList;
