import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

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

 
  return (
    <div>Event {event.title}</div>
  )
  
}

export default Event;