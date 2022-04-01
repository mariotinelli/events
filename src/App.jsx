import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEvent from './pages/CreateEvent';
import Events from './pages/Events';
import Login from './pages/Login';
import Register from './pages/Register';
import MyEvents from './pages/MyEvents';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';


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
            </Routes>
        </Router>

      
    )
}

export default App
