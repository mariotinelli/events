import React from 'react'

import { Card, Date, Image, Informations, Locality, Participants, Title, Button } from './styled';

const EventCard = ({src, title, date, locality, participants}) => {
  return (
    <Card>
        <Image src={src} alt="image card"/>
        <Informations>
            <Title> {title} </Title>
            <Date> {date} </Date>
            <Locality> {locality} </Locality>
            <Participants> {participants} </Participants>
            <Button > Saber mais </Button>
        </Informations>
    </Card>
  )
}

export default EventCard;