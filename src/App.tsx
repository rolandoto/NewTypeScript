import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';
import { LoginForm } from './components/LoginForm/LoginForm';


function App() {

  const INTIAL = [
    {
      nick: "rolando",
      subMonts: 3,
      avatar: "https://gravatar.com/avatar/8e04be7dab487d77f16969fd3e0d45d4"
    }
  ];

  
  const [subs, setSub] = useState<Array<Sub>>([]);

  useEffect(() => {
    setSub(INTIAL);
  }, []);

  const divRef = useRef<HTMLDivElement>(null)

  const handleNewSub =(e:Sub):void =>{
    setSub(sub => ([...sub,e]))
  }

  return (
    <div className="App" ref={divRef} >
        
          <LoginForm title='rolando' error={"rosodoka"}  loading={false}  />
    </div>
  );
}

export default App;
