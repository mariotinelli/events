import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Data, DataContainer, Description, EventComponent, Image, Info, Infos, Title } from './styled';
import Button from '@mui/material/Button';
import dateFormat from '../../../utils';
import {IoLocationOutline, IoCalendarOutline, IoGlobeOutline, IoPersonOutline, IoPeopleOutline} from 'react-icons/io5';
import useFetch from '../../useFetch';

const Event = () => {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState({});
    const [eventType, setEventType] = useState({});
    const imageURL = "http://localhost:8000/storage/img/";

    useEffect(() => {
        fetch(`http://localhost:8000/api/event/${id}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            }
        })
        .then(resp => resp.json())
        .then(data => {
            fetch(`http://localhost:8000/api/event_type/${data.event_type_id}`, {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              }
            })
            .then(resp => resp.json())
            .then(data => {
                setEventType(data);
            })
            .catch(err => console.log(err))
              
          setEvent(data);
          setLoading(false);
        })
        .catch(err => console.log(err))
    }, [])

   
    function confirmPresence() {

      event.participants += 1;

      fetch(`http://localhost:8000/api/event/update/${id}`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(event),          
          })
          .then((resp) => resp.json())
          .then((data) => setEvent(data))
          .catch( (err) => console.log(err) )
    }
    
    if (loading) {
      return <h1>Carregando...</h1>
    }
      
    return (
      <EventComponent>
        <Image src={imageURL+event.img}/>
        <DataContainer>
          <Title>{event.title}</Title>
          <Data>
            <Infos>
              <Info> <IoPersonOutline/> Owner</Info>
              <Info> <IoCalendarOutline/> {dateFormat(event.date)} </Info>
              <Info> <IoLocationOutline/> {event.locality} </Info>
            </Infos>
            <Infos>
              <Info> <IoPeopleOutline/> {event.participants} Participantes</Info>
              <Info> <IoGlobeOutline/> {eventType.name} </Info>
            </Infos>
          </Data>
          <Button onClick={confirmPresence} variant="contained" size="medium"> Confirmar Presença </Button>
        </DataContainer>
        <Description>
          {event.description}
        </Description>
    </EventComponent>
  )  
}

export default Event;