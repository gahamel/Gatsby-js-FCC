import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import './header.module.scss';

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <Link className={headerStyles.link} to="/home">Accueil</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">A props</Link>
      <Link to="/contact">Contact</Link>
    </header>
  )
}

export default Header;
