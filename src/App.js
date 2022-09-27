import React from 'react';
import Navbar from './componentes/navbar/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './componentes/footer/footer';
import InputData from './componentes/inputDataContainer/inputDataContainer';
import ResultsData from './componentes/resultsContainer/resultsContainer';
import DataProvider from './componentes/context/dataContext';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<InputData />} />
          <Route path='/result/:equipoId' element={<ResultsData />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
