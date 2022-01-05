import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/header';
import WeaterReport from './component/homeapp';
function App() {
  return (
   
      <React.Fragment>

          <Header/>

         <WeaterReport />

      </React.Fragment>
  );
}

export default App;
