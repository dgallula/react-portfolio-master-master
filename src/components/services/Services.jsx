import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>html5</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS3</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SAAS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Javascript advanced</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Typescript</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Angular15</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>nodejs express</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>php laravel10</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>QA tools</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>JIRA</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cucumber</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Xenu</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PageSpeed Insights</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
