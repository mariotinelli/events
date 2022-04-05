import React from 'react'
import { useState } from 'react';
import Input from '../Layout/Form/Input';
import TextArea from '../Layout/Form/TextArea';
import Form from '../Layout/Form/Form';
import Button from '../Layout/Form/Button'
import { useRef } from 'react';

import useFetch from '../../useFetch';

const EventForm = ({handleSubmit, eventData, btnText}) => {

    const imgRef = useRef();
    const [event, setEvent] = useState(eventData || {})
    const [image, setImage] = useState();

    function handleChange(e) {
        setEvent({ ...event, [e.target.name]: e.target.value})
        //setValue(e.target.name, e.target.value)
    }

    function handleImage(e) {
        //setImage(e.target.files[0])        
        setImage(URL.createObjectURL(e.target.files[0]));
        event.img = image;
        //console.log(typeof image);
    }     

    
    const createEvent = (e) => {
        e.preventDefault();
        handleSubmit(event, image);        
    }

    return (
        <Form onSubmit={createEvent}> 
            <Input 
                label="Imagem" 
                type="file" 
                name="img" 
                //value={image?.name ? image.name : ""}
                handleChange={handleImage} 
                placeholder="Imagem do evento" 
            />
            <div>{event.img}</div>
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