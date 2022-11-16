import React from 'react';
import styles from './Populares.module.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Londres from '../../Assets/londres.jpg';
import Amsterda from '../../Assets/amsterda.jpg';
import Veneza from '../../Assets/veneza.jpg';
import Lisboa from '../../Assets/lisboa.jpg';
import Madrid from '../../Assets/madrid.jpg';
import Edimburgo from '../../Assets/edimburgo.jpg';

const Populares = () => {

  const Data = [
    {
      id: 1,
      imgSrc: Londres,
      nomeDestino: 'Londres',
    },
    {
      id: 2,
      imgSrc: Amsterda,
      nomeDestino: 'Amsterdã',
    },
    {
      id: 3,
      imgSrc: Veneza,
      nomeDestino: 'Veneza',
    },
    {
      id: 4,
      imgSrc: Lisboa,
      nomeDestino: 'Lisboa',
    },
    {
      id: 5,
      imgSrc: Madrid,
      nomeDestino: 'Madrid',
    },
    {
      id: 6,
      imgSrc: Edimburgo,
      nomeDestino: 'Edimburgo',
    }
  ]

  return (
    <section id='populares' className={[styles.populares, "container", "section"].join(' ')}>
      <div className={styles.secContainer}>

        <div className={[styles.secHeader, "flex"].join(' ')}>
          <div className={styles.textoDiv}>
            <h2 className={styles.titulo}>
              Destinos Populares
            </h2>
            <p>De cidades históricas a paisagens de tirar o fôlego. Conheça os melhores lugares do mundo!</p>
          </div>
        </div>

        <div className={[styles.conteudoPrincipal, "grid", "conteudoPrincipal"].join(' ')}>
          {
            Data.map(({id, imgSrc, nomeDestino }) => {
              return (
                  <div className={styles.localDestino}>
                    <div className={styles.localDestinoImagem}>
                      <img src={imgSrc} alt="imagem destino" />
                      <div className={styles.localDestinoInfo}>
                        <BsArrowRightShort className={[styles.localDestinoIcone, "icone"].join(' ')}/>
                      </div>
                    </div>
      
                    <div className={styles.localDestinoFooter}>
                      <div className={styles.localDestinoFooterNumero}>
                        0{id}
                      </div>
      
                      <div className={[styles.localDestinoTexto, "flex"].join(' ')}>
                        <h6>{nomeDestino}</h6>
                        <span className={styles.flex}>
                          <span className={styles.nomeMarca}>
                            TravelEasy
                          </span>
                        </span>
                      </div>

                    </div>
                  </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Populares;