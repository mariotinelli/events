import React from 'react'
import { useState } from 'react';
import Input from '../Layout/Form/Input';
import TextArea from '../Layout/Form/TextArea';
import Form from '../Layout/Form/Form';
import Button from '../Layout/Form/Button'

const EventForm = ({handleSubmit, eventData, btnText}) => {

    const [event, setEvent] = useState(eventData || {})

    function handleChange(e) {
        setEvent({ ...event, [e.target.name]: e.target.value})
        //setValue(e.target.name, e.target.value)
    }

    const createEvent = (e) => {
        e.preventDefault();
        handleSubmit(event);        
    }

    return (
        <Form onSubmit={createEvent}> 
            <Input 
                label="Imagem" 
                type="file" 
                name="img" 
                value={event.img ? event.img : ""} 
                handleChange={handleChange} 
                placeholder="Imagem do evento" 
            />
            <Input 
                label="Titulo" 
                type="text" 
                name="title" 
                value={event.title ? event.title : ""} 
                handleChange={handleChange} 
                placeholder="Titulo do evento" 
            />
            <Input 
                label="Locality" 
                type="text" 
                name="locality" 
                value={event.locality ? event.locality : ""} 
                handleChange={handleChange} 
                placeholder="Localidade do evento" 
            />
            <TextArea 
                label="Descrição" 
                name="description" 
                value={event.description ? event.description : ""} 
                handleChange={handleChange} 
                placeholder="Descrição do evento" 
            />
            <Button type='submit' btnText={btnText} />
        </Form>
    )
}

export default EventForm;