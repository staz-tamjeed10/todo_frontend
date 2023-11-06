import React, { useState } from 'react';
import PlusIcon from '../assets/icons/PlusIcon';
import { InputGroup, FormControl, Button, Form, Stack } from 'react-bootstrap';

function TaskAdd() {
  const [taskName, setTaskName] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleAddTask = async () => {
    try {
      const response = await fetch(`${apiUrl}/tasks/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task_name: taskName }),
      });

      if (response.ok) {
        console.log('Task created successfully');
        setTaskName('');
      } else {
        console.error('Error creating task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <Form>
      <InputGroup className='mb-4'>
        <FormControl
            style={{ borderRadius: '10px 0px 0px 10px', background: 'white' }}
            placeholder='Add new task'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
        />
        <Button style={{ background: 'white', borderRadius: '0px 10px 10px 0px', padding: 5 }} type='submit' onClick={handleAddTask}>
          <Stack style={{ background: '#c0b78e', padding: 10, borderRadius: '10px' }}><PlusIcon /></Stack>
        </Button>
      </InputGroup>
    </Form>
  );
}

export default TaskAdd;
