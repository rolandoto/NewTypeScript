import React, { useEffect, useRef, useState ,Suspense} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Vivair = React.lazy(() => import ('./Page/Vivair')) 
const Avianca = React.lazy(() => import ('./Page/Avianca')) 
const Travel = React.lazy(() => import ('./Page/Travel'))   

const App:React.FC =() => {


  return (
    <div className='App' >
      <Suspense fallback={null} >
        <BrowserRouter>
            <Menu />
                <Routes>
                  <Route  path="/vivair" element={<Vivair/>} />
                  <Route   path="/avianca" element={<Avianca/>} />
                  <Route   path="/travel" element={<Travel />} />
                </Routes>
          </BrowserRouter>
        </Suspense>
    </div>
  );
}
export default App;
