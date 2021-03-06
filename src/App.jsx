import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEvent from './pages/CreateEvent';
import Events from './pages/Events';
import Event from './pages/Event';
import Login from './pages/Login';
import Register from './pages/Register';
import MyEvents from './pages/MyEvents';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import EditEvent from './pages/EditEvent';


function App() {

    return (

        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path='/' element={<Events />} />
              <Route path='/create_event' element={<CreateEvent />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/my_events' element={<MyEvents />} />              
              <Route path='/events/:id' element={<Event />} />              
              <Route path='/edit/:id' element={<EditEvent />} />              
            </Routes>
        </Router>

      
    )
}

export default App
