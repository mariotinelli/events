import React, { useEffect } from 'react'
import { useState } from 'react';
//import Input from '../Layout/Form/Input';
//import TextArea from '../Layout/Form/TextArea';
import Form from '../Layout/Form/Form';


import {  InputLabel, TextField, Button, Stack, Select, MenuItem, FormControl } from '@mui/material';

const EventForm = ({handleSubmit, eventData, btnText}) => {


    const [event, setEvent] = useState(eventData || {})
    const [eventTypes, setEventTypes] = useState({})
    const [image, setImage] = useState();
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }
  
        fetch('http://localhost:8000/api/event_types', options)
          .then((resp) => resp.json())
          .then((data) => setEventTypes(data))
          .catch((err) => console.log(err))
  
    },[])

    function handleChange(e) {
        setEvent({ ...event, [e.target.name]: e.target.value})
    }

    function handleImage(e) {      
        setImage(URL.createObjectURL(e.target.files[0]));
        event.img = image;
    }     

    
    const createEvent = (e) => {
        e.preventDefault();
        handleSubmit(event, image);    
    }

    return (
        <Form onSubmit={createEvent}> 
            <InputLabel htmlFor="component-simple">Imagem</InputLabel>
            <TextField 
                type="file" 
                id="img" 
                name="img"
                variant="outlined" 
                size='larger' 
                onChange={handleImage} 
                fullWidth
            />        
            <div>{event.img}</div>
            <TextField 
                id="title" 
                name="title"
                label="Titulo" 
                variant="outlined" 
                size='small' 
                value={event.title ? event.title : ""} 
                onChange={handleChange} 
                fullWidth 
            />
            <Stack direction="row" justifyContent="space-between" spacing={2} sx={{width: "100%"}}>
                <TextField 
                    type="date"
                    id="date" 
                    name="date"
                    variant="outlined" 
                    size='small' 
                    value={event.date ? event.date : ""} 
                    onChange={handleChange} 
                    fullWidth 
                />
                <TextField 
                    id="locality" 
                    name="locality"
                    label="Local" 
                    variant="outlined" 
                    size='small' 
                    value={event.locality ? event.locality : ""} 
                    onChange={handleChange} 
                    fullWidth 
                />
            </Stack>
            <FormControl fullWidth>
                <InputLabel id="area">Selecione uma área</InputLabel>
                <Select 
                    label="Selecione uma área" 
                    labelId="area" 
                    id="area" 
                    name="area"
                    value={event.area ? event.area : ""} 
                    onChange={handleChange} 
                    placeholder="Selecione uma opção"
                    fullWidth                >
                    {eventTypes.length > 0 && (
                        eventTypes?.map((type) => (
                            <MenuItem key={type.id} value={type.name}>{type.name}</MenuItem>                            
                    )))}
                        
                </Select>
            </FormControl>
            <TextField 
                id="description" 
                name="description"
                label="Descrição" 
                variant="outlined" 
                size='larger' 
                value={event.description ? event.description : ""} 
                onChange={handleChange} 
                multiline rows={5} fullWidth
            />
            {/*
            <Input 
                label="Imagem" 
                type="file" 
                name="img" 
                //value={image?.name ? image.name : ""}
                handleChange={handleImage} 
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
            <Button type='submit' btnText={btnText} />*/}
            <Button type='submit' variant='contained' > {btnText} </Button>
        </Form>
    )
}

export default EventForm;