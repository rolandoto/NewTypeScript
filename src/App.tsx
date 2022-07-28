import React, {Suspense} from 'react';
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
const Success = React.lazy(() => import ('./Page/Confirms'))   

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
                  <Route   path="/success" element={<Success />} />
                </Routes>
          </BrowserRouter>
        </Suspense>
    </div>
  );
}
export default App;
