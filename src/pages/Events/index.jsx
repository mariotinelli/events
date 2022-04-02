import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import EventCard from '../../components/EventCard';
import { Cards, EventsComponent, Title } from './styled';

const Events = () => {
    
    const [events, setEvents] = useState([])
    useEffect(() => {
      fetch('http://localhost:8000/api/events', {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((resp) => resp.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.log(error))      
    }, [])

    return (
      <EventsComponent>
          <Title> Próximos Eventos </Title>
          {events.length > 0 ? (
            <Cards>
                {events.map((event) => (
                    <EventCard 
                      key={event.id}
                      src="/public/images/banner1.png" 
                      title={event.title} 
                      date="15/12/1994"
                      locality={event.locality}
                      participants={`${event.participants} Participantes`}/>
                ))}
            </Cards>
          ) : (
            <h3>Não há eventos disponíveis!</h3>
          )}          
      </EventsComponent>
    )

}

export default Events;