import React from 'react'

import { Card, Date, Image, Informations, Locality, Participants, Title} from './styled';
import Button from '@mui/material/Button';
const EventCard = ({src, id, title, date, locality, participants}) => {
  

  
  return (
    <Card>
        <Image src={src} alt="image card"/>
        <Informations>
            <Title> {title} </Title>
            <Date> {date} </Date>
            <Locality> {locality} </Locality>
            <Participants> {participants} </Participants>
            <Button href={`/events/${id}`} variant="contained" color="success" size="small"> Saber mais </Button>
        </Informations>
    </Card>
  )
}

export default EventCard;