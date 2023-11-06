import React from 'react';
import './App.css';
import { Accordion, Stack } from 'react-bootstrap';
import ProfilePicture from './components/ProfilePicture';
import background from './assets/images/image.webp';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';
import ListIcon from './assets/icons/ListIcon'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    paddingTop: 100,
    paddingLeft: 500,
    paddingRight: 500,
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={backgroundStyle}>
      <Stack className='mb-5'>
        <ProfilePicture />
      </Stack>
      <Stack className='mb-5'>
        <TaskAdd />
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item style={{ background: 'transparent' }} eventKey="0">
            <Accordion.Header><ListIcon />Your todos</Accordion.Header>
            <Accordion.Body style={{ padding: 0 }}>
              <TaskList />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </div>
  );
}

export default App;
