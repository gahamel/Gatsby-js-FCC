import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>Je suis Gaétan, dev fullstack JS</h2>
      <p>Besoin d'un dev?<Link to="/contact">Me recruter</Link></p>
    </Layout>
  )
};

export default IndexPage;