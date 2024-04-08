import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="airflw__header section__padding" id="home">
    <div className="airflw__header-content">
      <h1 className="gradient__text">Empower Your Workflows with New Airflow 2.0!</h1>
      <p>Discover our innovative platform designed to streamline your workflow automation. From scheduling tasks to monitoring dependencies, our Airflow-inspired solution offers unparalleled flexibility and scalability for your data engineering needs</p>

      <div className="airflw__header-content__input">
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="airflw__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
