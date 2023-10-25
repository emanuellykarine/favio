import React from 'react';
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';
 

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
<>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cadastro'}>Cadastro</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
      </>
    </nav>
    
  );
};

export default Menu;