import React from 'react'  
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  
import './App.css'
import Index from "./components/Index"
import Save from './components/Save'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'>
           <Navbar />
          </div>
          <div className='col-span-3'>
            <Breadcrumbs />
            
            <Routes>
              <Route path="/" element={<Index />} />  
              <Route path="/save" element={<Save />} /> 
            </Routes>  
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;