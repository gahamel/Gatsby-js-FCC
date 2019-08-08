import React from 'react';
import {Link} from "gatsby";
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>A propos</h1>
      <p>Gaetan, ingenieur dev autodidacte full stack javascript</p>
      <Link to="/contact">Me contacter</Link>
      <Footer />
    </div>
  )
}

export default AboutPage;
