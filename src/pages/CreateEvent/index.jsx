import React, { useEffect, useState } from 'react'
import EventForm from '../../components/EventForm';
import { Container, Title } from './styled';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../useFetch';


const CreateEvent = () => {

    const navigate = useNavigate();
    const [eventTypes, setEventTypes] = useState({});

    function onSubmit(event, img) {

      event.participants = 0;
      event.img = img;
      
      const options = {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify(event),
      }

      fetch('http://localhost:8000/api/event', options)
      navigate('/my_events')      
    }

    

    return (
      <>
        <Container>
          <Title> Crie seu Evento </Title>
          <EventForm handleSubmit={onSubmit} btnText="Criar Evento"/>      
        </Container>
      </>
    )
}

export default CreateEvent;
