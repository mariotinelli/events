import React from 'react'
import EventCard from '../../components/EventCard';
import { Cards, EventsComponent, Title } from './styled';
import useFetch from '../../useFetch';
import dateFormat from '../../../utils';

const Events = () => {
    
    const imageURL = "http://localhost:8000/storage/img/";

    const options = {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        }
    }

    const {data: events, loading, error} = useFetch('http://localhost:8000/api/events', options);

    if (loading) {
      return <h1>Carregando...</h1>
    }

    if (error) {
      return <h1>{error}</h1>
    }

    return (
      <EventsComponent>
          <Title> Próximos Eventos </Title>
          {events.length > 0 ? (
              <Cards>
                  {events.map((event) => (                      
                      <EventCard 
                        id={event.id}
                        key={event.id}
                        src={imageURL+event.img} 
                        title={event.title} 
                        date={dateFormat(event.date)}
                        locality={event.locality}
                        participants={`${event.participants} Participantes`}
                      />
                  ))}
              </Cards>
          ) : (              
              <h1>Não há eventos disponíveis...</h1>
          )}

      </EventsComponent>
    )
}

export default Events;