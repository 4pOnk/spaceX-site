import React from 'react';

import './style.css';

import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Feature from './components/features/feature';
import Footer from './components/footer/Footer';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Feature />
    {/* <Calendar /> */}
    <Footer />
    </>
  );
}

export default App;
