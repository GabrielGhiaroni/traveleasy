import React from 'react';
import styles from './Footer.module.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <section id='footer' className={styles.footer}>
      <div className={[styles.secContainer, "container", "grid"].join(' ')}>
        <div className={styles.footerLinks}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#populares">Populares</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className={styles.logoDiv}>         
          <div className={[styles.socials, "flex"].join(' ')}>
            <a href="https://gabrielghiaroni.com/" target="_blank"><AiOutlineGlobal className={[styles.icone, 'icone'].join(' ')}/></a>
            <a href="https://www.linkedin.com/in/gabrielghiaroni/" target="_blank"><GrLinkedinOption className={[styles.icone, 'icone'].join(' ')}/></a>
            <a href="https://api.whatsapp.com/send?phone=5521983617775" target="_blank"><BsWhatsapp className={[styles.icone, 'icone'].join(' ')}/></a>
            <a href="https://github.com/GabrielGhiaroni" target="_blank"><FiGithub className={[styles.icone, 'icone'].join(' ')}/></a>    
          </div>

          <div className={styles.logoFooter}>
            <a href="#" className={[styles.logo, "flex"].join(' ')}>
              <h1 className='flex'><SiYourtraveldottv className={[styles.logoTravelEasy, 'icone'].join(' ')}/> TravelEasy</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;