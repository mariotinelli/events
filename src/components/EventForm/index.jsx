import React, { useEffect, useState, useRef } from 'react'
//import Input from '../Layout/Form/Input';
//import TextArea from '../Layout/Form/TextArea';
import Form from '../Layout/Form/Form';
import {  InputLabel, TextField, Button, Stack, Select, MenuItem, FormControl } from '@mui/material';


const EventForm = ({handleSubmit, eventData, btnText}) => {

    const imageURL = "http://localhost:8000/storage/img/";
    const [event, setEvent] = useState({} || eventData);
    const [eventTypes, setEventTypes] = useState({});
    const [image, setImage] = useState();
    const [eventType, setEventType] = useState();
    
    const imageRef = useRef();

    useEffect(() => {
        if (eventData !== null) {
            setEvent(eventData);
            imageRef.current.src = imageURL+eventData.img;
    }}, [eventData])

    function dateFormat(date) {
        let newDate = new Date(date);
        return newDate.toISOString().split('T')[0];
    }

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

    const formData = new FormData();////////

    function handleChange(e) {
        setEvent({ ...event, [e.target.name]: e.target.value})
        formData.append(e.target.name, e.target.value); /////////////
    }

    function handleImage(e) {    
        if (e.target.files[0]) {
            imageRef.current.src = URL.createObjectURL(e.target.files[0]);
        } else {
            imageRef.current.src = imageURL+event.img;
        }         
        setImage(e.target.files[0]);
        formData.append(e.target.name, e.target.files[0]); ////////////////////
    } 

  
    const submit = (e) => {
        e.preventDefault();
        //handleSubmit(event, image);    
        handleSubmit(formData);    
    }

    return (
        <Form onSubmit={submit}> 
            <InputLabel htmlFor="img">Imagem</InputLabel>
            <TextField 
                type="file" 
                id="img" 
                name="img"
                variant="outlined" 
                size='larger' 
                onChange={handleImage} 
                fullWidth
            />        
            <img ref={imageRef} style={{width: "100%"}}/>
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
                    value={event.date ? dateFormat(event.date) : ""} 
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
                    labelId="event_type_id" 
                    id="event_type_id" 
                    name="event_type_id"
                    value={event.event_type_id ? event.event_type_id : ""} 
                    onChange={handleChange} 
                    placeholder="Selecione uma opção"
                    fullWidth                >
                    {eventTypes.length > 0 && (
                        eventTypes?.map((type) => (
                            <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>                            
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