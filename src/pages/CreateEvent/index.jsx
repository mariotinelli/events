import React from 'react'
import EventForm from '../../components/EventForm';
import { Container, Title } from './styled';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

import {parse, stringify, toJSON, fromJSON} from 'flatted';

const CreateEvent = () => {

    const navigate = useNavigate();

    function onSubmit(event) {

      event.participants = 0;

      fetch('http://localhost:8000/api/event', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify(event),
      })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate('/my_events', { state: {message: "Evento criado com sucesso"}})
      })
      .catch((error) => console.log(error))
      
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
