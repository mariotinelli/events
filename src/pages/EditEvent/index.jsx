import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EventForm from '../../components/EventForm';

const EditEvent = () => {

    const {id} = useParams();
    const [event, setEvent] = useState({});
    const [eventTypes, setEventTypes] = useState({});

    function loadType(event){
        const type = eventTypes.find((type) => type.id === event.event_type_id);
        return type.name;
    }

    function editEvent(formData){

        console.log(formData.get("locality"));

        fetch(`http://localhost:8000/api/event/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: formData
        })
        .then((resp) => resp.json())
        .then((data) => setEvent(data))
        .catch((err) => console.log(err))
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
            <div>EditEvent {event.title}</div>
            <EventForm handleSubmit={editEvent} eventData={event} btnText="Editar Evento"/>
        </>
    )
}

export default EditEvent;