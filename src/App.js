import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import people from "../src/data/people.json"
import carousel from "../src/assets/images/itemscarousel.png";
import social from "../src/assets/images/socialcarousel.png";


function App() {
  // const [featuredPerson, setFeaturedPerson] = useState(people[0]);
  const [heroImage, setHeroImage] = useState(people[0].image1);
  const [articleImage, setArticleImage] = useState(people[0].image2);
  const [heroTitle, setHeroTitle] = useState(people[0].name);
  const [heroQuote, setHeroQuote] = useState(people[0].quote);
  const [heroHeader, setHeroHeader] = useState(people[0].header);
  const [heroBody, setHeroBody] = useState(people[0].body);
  const [showMore, setShowMore] = useState(false);

  
let changePerson = (id) => {
 setHeroImage(people[id].image1)
 setArticleImage(people[id].image2)
 setHeroTitle(people[id].name)
 setHeroQuote(people[id].quote)
 setHeroHeader(people[id].header)
 setHeroBody(people[id].body)
}

// useEffect(() => {
//   changePerson();
// },[])

  return (
    <div className="App">
      <Header/>
      <div className="hero">
        <div className="hero__quote">
          <div className="hero__content">
            <h1 className="hero__title">{heroTitle}</h1>    
            <p className="hero__text">{heroQuote}</p>  
          </div>
            <img className='hero__img' src={heroImage}></img>
        </div>
      </div>

      <div className="morestories">
        <p className="morestories__title">More Stories</p>
        <div className="morestories__feed">
          {people.map((person) => {
            return (
              <div className="morestories__item" onClick={() => {changePerson(person.id)}}>
                <img className="morestories__avatar" src={person.image1}></img>
                <p className="morestories__label">{person.name.split(" ")[0]}</p>
            </div>
            )
          }
        )}
          
        </div>
        <div>

        </div>
      </div>

      <article className="article">
        <div className="article__content">
        <h1 className="article__title">{heroHeader}</h1>
        <p className={`article__text ${showMore ? "article__text--expanded" : ""}`} onClick={()=>{showMore()}}>{heroBody}
        </p>
        </div>

        <button className="article__button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Read more"}
        </button>
 
        
        <img src={articleImage} className="hero__img"></img>
      </article>


      <section className="carousel">
        <h2 className="carousel__title">What {heroTitle.split(" ")[0]} is Wearing</h2>
        <img src={carousel}></img>
      </section>

      
      <section className='carousel'>
        <h2 className="carousel__title">#YourExpedition</h2>
          <img src={social}></img>
      </section>

    </div>
  );
}

export default App;
