import React from 'react'
import EventForm from '../../components/EventForm';
import { Container, Title } from './styled';
import { useNavigate } from 'react-router-dom';


const CreateEvent = () => {

    const navigate = useNavigate();

    function onSubmit(event, img) {

      event.participants = 0;
      
      const formData = new FormData();
      formData.append('title', event.title);
      formData.append('img', img);
      formData.append('participants', event.participants);
      formData.append('description', event.description);
      formData.append('event_type_id', event.event_type_id);
      formData.append('date', event.date);
      formData.append('locality', event.locality);

      const options = {
          method: 'POST',
          body: formData,
      }

      fetch('http://localhost:8000/api/event', options)
      .then(resp => resp.json())
      .then(data => {
        navigate('/my_events')   
      })
      .catch(err => console.log(err))
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
