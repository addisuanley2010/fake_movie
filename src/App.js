import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Body/Home';
import PageNotFound from './components/PageNotFound'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
