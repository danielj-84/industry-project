
import Hero from '../Hero/Hero';
import './Article.scss';
import mainImg from "../../assets/images/sarain-main-img-d.jpg"

function Article() {
  return (
    <div className="article">
        <Hero/>
        <h1 className="article__title">"Sarain Fox is a storyteller."</h1>
        <p className="article__text">Lorem Ipsum Sit Amet.</p>
        <img className="article__img" src={mainImg} alt="Sarain in the rain"></img>
    </div>
  );
}

export default Article;