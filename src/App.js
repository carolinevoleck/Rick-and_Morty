 import React from 'react';
import Card from './components/Card/Card'; 
import { Header } from './components/Header/Header';
 import { GlobalStyle } from './GlobalStyle'; 
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { HomePage } from './pages/HomePage/HomePage';


function App() {
  return (
    <div>
    <GlobalStyle/>
    <HomePage/>
    <DetailsPage/> 
    </div>
  );
}

export default App