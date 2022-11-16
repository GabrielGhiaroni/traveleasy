import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

  const [menuAtivo, setMenuAtivo] = useState(styles.navBar);

  const [backgroundHeader, setBackgroundHeader] = useState(styles.header);
  const [iconeBranco, setIconeBranco] = useState('')

  const adicionarBackground = () => {
    if (window.scrollY >= 10) {
      setBackgroundHeader([styles.header, styles.headerAtivo].join(' '));
      setIconeBranco(styles.iconeBranco);
    } else {
      setBackgroundHeader(styles.header)
    }
  }

  window.addEventListener('scroll', adicionarBackground);

  return (
    <section className={styles.navbarSection}>
      <div className={backgroundHeader}>
          <div className={styles.logoDiv}>
            <a href="#home" className={styles.logo}>
              <h1 className='flex'><SiYourtraveldottv className={[iconeBranco, 'icone'].join(' ')} style={{marginRight: '.5rem'}}/>TravelEasy</h1>
            </a>
          </div>

         
          <div className={menuAtivo}>
              <ul className={[styles.navLists, "flex"].join(" ")}>
                <li className={styles.navItem}>
                  <a href="#home" className={styles.navLink}>Home</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#populares" className={styles.navLink}>Destinos</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#ofertas" className={styles.navLink}>Ofertas</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#sobre" className={styles.navLink}>Sobre nós</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#blog" className={styles.navLink}>Blog</a>
                </li>

                <div className={[styles.headerBtns, "flex"].join(' ')}>
                  <button className={[styles.btn, styles.loginBtn, "btn"].join(' ')}><a href="#home">Login</a></button>
                  <button className={[styles.btn, "btn"].join(' ')}><a href="#home">Cadastre-se</a></button>
                </div>
              </ul>

              <div className={styles.fecharNavbar} onClick={() => setMenuAtivo(styles.navBar)}>
                <AiFillCloseCircle className='icone'/>
              </div>
          </div>

            <div className={styles.toggleNavbar}  onClick={() => setMenuAtivo([styles.navBar, styles.navbarAtivo].join(' '))}>
                <FiMenu className={styles.iconeMenu}/>
            </div>
      </div>
    </section>
  )
}

export default Navbar;