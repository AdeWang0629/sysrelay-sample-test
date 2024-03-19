import React, { useState } from 'react'  
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  
import './App.css'
import Index from "./components/Index"
import Save from './components/Save'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'

const App = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedBread, setSelectedBread] = useState(0);

  return (
    <div className="App">
      <Router>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'>
           <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} setSelectedBread={setSelectedBread}/>
          </div>

          <div className='col-span-3'>
            <Breadcrumbs selectedItem={selectedItem} selectedBread={selectedBread} />
            
            <Routes>
              <Route path="/" element={<Index selectedItem={selectedItem} selectedBread={selectedBread} setSelectedBread={setSelectedBread} />} />  
              <Route path="/save" element={<Save selectedItem={selectedItem} selectedBread={selectedBread} setSelectedBread={setSelectedBread} />} /> 
            </Routes>  
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;