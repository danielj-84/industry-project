import './App.scss';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  const [] = useState("");

  return (
    <div className="App">
      <Header/>
      <Article/>

      <Footer/>
    </div>
  );
}

export default App;
