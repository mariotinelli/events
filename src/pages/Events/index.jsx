import React from 'react'
import EventCard from '../../components/EventCard';
import { Cards, EventsComponent, Title } from './styled';
import useFetch from '../../useFetch';


const Events = () => {
    
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
          {console.log(events)}
          {events.length > 0 ? (
              <Cards>
                  {events.map((event) => (                      
                      <EventCard 
                        id={event.id}
                        key={event.id}
                        src={event.img} 
                        title={event.title} 
                        date="15/12/1994"
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