import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  const [] = useState("");

  return (
    <div className="App">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
