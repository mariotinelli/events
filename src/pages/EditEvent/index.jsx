import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EventForm from '../../components/EventForm';

import { useNavigate } from 'react-router-dom';

const EditEvent = () => {

    const {id} = useParams();
    const [event, setEvent] = useState({});
    const [eventTypes, setEventTypes] = useState({});
    const navigate = useNavigate();

    function loadType(event){
        const type = eventTypes.find((type) => type.id === event.event_type_id);
        return type.name;
    }

    function editEvent(event, img){

        const formData = new FormData();

        if (img != undefined) {
            event.img = img;
            formData.append('img', img);
        }
        
        formData.append('title', event.title);
        formData.append('participants', event.participants);
        formData.append('description', event.description);
        formData.append('event_type_id', event.event_type_id);
        formData.append('date', event.date);
        formData.append('locality', event.locality);


        fetch(`http://localhost:8000/api/event/update/${id}`, {
            method: "POST",
            body: formData
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          navigate('/my_events');
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`http://localhost:8000/api/event/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setEvent(data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/api/event_types`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setEventTypes(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <>            
            <EventForm handleSubmit={editEvent} eventData={event} btnText="Editar Evento"/>
        </>
    )
}

export default EditEvent;