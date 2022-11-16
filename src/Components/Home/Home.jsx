import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home' className={styles.home}>
      <div className={[styles.secContainer, "container"].join(' ')}>
        <div className={styles.homeTexto}>
          <h1 className={styles.titulo}>
            Planeje sua viagem com a <span style={{color: 'var(--hover)'}}>TravelEasy</span>
          </h1>
          <p className={styles.subtitulo}>
            Conheça o destino dos seus sonhos por preços acessíveis!
          </p>
          <button className={[styles.homeBtn, "btn"].join(' ')}><a href="#">Explorar</a></button>
        </div>

        <div className={[styles.homeCard, "grid"].join(' ')}>
          <div className={styles.localDiv}>
            <label htmlFor="destino">Partida</label>
            <input type="text" placeholder='Local de partida'/>
          </div>

          <div className={styles.destinoDiv}>
            <label htmlFor="destino">Destino</label>
            <input type="text" placeholder='Buscar destino'/>
          </div>

          <div className={styles.valoresDiv}>
            <label htmlFor="destino">Preço</label>
            <input type="text" placeholder='R$400 - R$800'/>
          </div>

          <button className={[styles.btnHomeCard, "btn"].join(' ')}><a href="#">Buscar</a></button>
        </div>
      </div>
    </section>
  )
}

export default Home;