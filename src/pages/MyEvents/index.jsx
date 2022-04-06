import { Button } from '@mui/material';
import React from 'react'
import useFetch from '../../useFetch';
import { MyEventsContainer, Table, Tbody, Td, Th, Thead, Tr } from './styled';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const MyEvents = () => {

  function loadType(event){
      const type = eventTypes.find((type) => type.id === event.event_type_id);
      return type.name;
  }

  function deleteEvent(event){
    const options = {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      }      
    }

    fetch(`http://localhost:8000/api/event/${event.id}`, options)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }

  const options = {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
  }
  const {data: eventTypes} = useFetch('http://localhost:8000/api/event_types', options);
  const {data: events, loading, error} = useFetch('http://localhost:8000/api/events', options);

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <MyEventsContainer>
        <Table>
          <Thead>
            <Tr>
              <Th> Title </Th>
              <Th> Date </Th>
              <Th> Area </Th>
              <Th> Local </Th>
              <Th> Participantes </Th>
              <Th> Ações </Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event) => (
              <Tr key={event.id}>
                <Td> {event.title} </Td>
                <Td> "17/12/1994" </Td>
                <Td> {loadType(event)} </Td>
                <Td> {event.locality} </Td>
                <Td> {event.participants} </Td>
                <Td> 
                  <Stack direction="row" spacing={2}>
                    <IconButton href={`/edit/${event.id}`} sx={{backgroundColor: "green", color: "white"}} aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={deleteEvent} sx={{backgroundColor: "red", color: "white"}} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </MyEventsContainer>    
    </>
  )
}

export default MyEvents;