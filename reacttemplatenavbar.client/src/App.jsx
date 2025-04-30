import React from 'react';
import Home from './pages/Home'; 
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Weather from './pages/Weather';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/weather" element={<Weather /> } />
            </Routes>
        </div>
    );
};

export default App;
