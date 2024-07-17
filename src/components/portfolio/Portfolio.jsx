import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "App tasks-todolisit in Javascript Vanilla SAAS ",
    github: "https://github.com/dgallula/projet1-john-bryce-task-to-do-master",
  },
  {
    id: 2,
    image: IMG2,
    title: "Cryptobites , App API  restfull in Javascript AJAX Fetch ",
    github: "https://github.com/dgallula/project2-APIBitcoins-project-new-version",
  },
  {
    id: 3,
    image: IMG3,
    title: "APP pokedex about pokemon in Angular15",
    github: "https://github.com/dgallula/pokemon-app-master-angular15",
  },
  {
    id: 4,
    image: IMG4,
    title: "Fullstack project APP about vacations in react18 Nodejs Express Mysql",
    github: "https://github.com/dgallula/projet3_john-bryce-vacations-master",
  },
  {
    id: 5,
    image: IMG5,
    title: "ShoppingOnline APP in angular nodejs express Mongodb",
    github: "https://github.com/dgallula/projet4-jb-shoppingonline-angular-mongodb-master",
  },
  {
    id: 6,
    image: IMG6,
    title: "website blog  in php mysql",
    github: "https://github.com/dgallula/projet-blog",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
