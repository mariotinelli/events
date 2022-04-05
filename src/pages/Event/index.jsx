import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Data, DataContainer, Description, EventComponent, Image, Info, Infos, Title } from './styled';
import Button from '@mui/material/Button';

import {IoLocationOutline, IoCalendarOutline, IoGlobeOutline, IoPersonOutline, IoPeopleOutline} from 'react-icons/io5';
import { ImPencil } from "react-icons/im"; 

const Event = () => {

  const {id} = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
      fetch(`http://localhost:8000/api/event/${id}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
      })
      .then((resp) => resp.json())
      .then((data) => setEvent(data))
      .catch( (err) => console.log(err) )
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
            <Info> <IoCalendarOutline/> 17/12/1994</Info>
            <Info> <IoLocationOutline/> {event.locality}</Info>
          </Infos>
          <Infos>
            <Info> <IoPeopleOutline/> {event.participants} Participantes</Info>
            <Info> <IoGlobeOutline/> Tecnologico</Info>
          </Infos>
        </Data>
        <Button onClick={confirmPresence} variant="contained" size="medium"> Confirmar Presença </Button>
      </DataContainer>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem iure asperiores, hic et vitae similique debitis nemo aliquid necessitatibus inventore, ex nihil. Tenetur consequatur soluta sequi iste, animi praesentium.
      </Description>
    </EventComponent>
  )  
}

export default Event;