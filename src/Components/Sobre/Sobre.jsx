import React from 'react';
import styles from './Sobre.module.css';
import Cliente from '../../Assets/cliente.png';
import Destino from '../../Assets/destino.png';
import Apartamento from '../../Assets/apartamento.png';

const Sobre = () => {
  return (
    <section id='sobre' className="section">
      <div className={styles.sectionContainer}>
        <div className="secIntro">
        <h2 className="secTitle">Sobre nós</h2>
        <p>Um pouco sobre a nossa história</p>
        </div>

        <div className={[styles.conteudoPrincipalSobre, "container", "grid"].join(' ')}>
          <div className={styles.item}>
            <img src={Destino} alt="destinos" />
            <h3>1200+ Destinos</h3>
            <p>Mais de 1.200 destinos em nossos pacotes para te ajudar a realizar seus sonhos</p>
          </div>

          <div className={styles.item}>
            <img src={Apartamento} alt="apartamentos" />
            <h3>3500+ Acomodações</h3>
            <p>Rigorosamente vistoriadas, para proporcionar o máximo de conforto a você e sua família</p>
          </div>

          <div className={styles.item}>
            <img src={Cliente} alt="clientes" />
            <h3>40000+ Clientes</h3>
            <p>Que nos avaliam em 5 estrelas e nos recomendam a outros amigos e familiares</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre;