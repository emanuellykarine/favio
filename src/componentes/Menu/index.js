import React from 'react';
import styles from './Menu.module.css'
 

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato </li>
      </ul>
    </nav>
  );
};

export default Menu;