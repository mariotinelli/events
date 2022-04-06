import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Data, DataContainer, Description, EventComponent, Image, Info, Infos, Title } from './styled';
import Button from '@mui/material/Button';
import dateFormat from '../../../utils';
import {IoLocationOutline, IoCalendarOutline, IoGlobeOutline, IoPersonOutline, IoPeopleOutline} from 'react-icons/io5';


const Event = () => {

  const {id} = useParams();
  const [event, setEvent] = useState({});
  const [eventType, setEventType] = useState({});

  useEffect( async () => {
    try {
      let result = await fetch(`http://localhost:8000/api/event/${id}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            }
      })
      let resp = await result.json();
      setEvent(resp);
    } catch (err) {
      console.log(err)
    }    
      
  }, [])

  useEffect( async () => {
    try {
      let result = await fetch(`http://localhost:8000/api/event_type/${event.event_type_id}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
      })
      let resp = await result.json();
      setEventType(resp);
    } catch (err) {
      console.log(err)
    };

}, [])

  function confirmPresence() {

    event.participants += 1;

    fetch(`http://localhost:8000/api/event/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(event),          
      })
      .then((resp) => resp.json())
      .then((data) => setEvent(data))
      .catch( (err) => console.log(err) )
  }
 
  return (
    <EventComponent>
      <Image src='/public/images/banner1.png'/>
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