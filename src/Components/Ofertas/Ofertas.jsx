import React from 'react';
import styles from './Ofertas.module.css';
import { MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md';
import { FaWifi, FaDog, FaThermometerHalf } from 'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';
import { IoIosSnow } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { TbToolsKitchen } from 'react-icons/tb';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import ApartamentoLondres from '../../Assets/apartamentolondres.jpg';
import ApartamentoPorto from '../../Assets/apartamentoporto.jpg';
import ApartamentoBarcelona from '../../Assets/apartamentobarcelona.jpg';
import ApartamentoLuxemburgo from '../../Assets/apartamentoluxemburgo.jpg';
import ApartamentoParis from '../../Assets/apartamentoparis.jpg';
import ApartamentoGlasgow from '../../Assets/apartamentoglasgow.jpg';

const Ofertas = () => {

  const Ofertas = [
    {
      id: 1,
      imgSrc: ApartamentoLondres,
      destino: 'Londres, Inglaterra',
      desconto: '30% off',
      preco: 'R$1.840',
      comodidade1: <MdKingBed className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <MdBathtub className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <FaWifi className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <IoIosSnow className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Cama casal',
      comodidade2Titulo: 'Banheira',
      comodidade3Titulo: 'Wifi',
      comodidade4Titulo: 'Ar'
    },
    {
      id: 2,
      imgSrc: ApartamentoPorto,
      destino: 'Porto, Portugal',
      desconto: '45% off',
      preco: 'R$1.030',
      comodidade1: <TbToolsKitchen className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <CgSmartHomeWashMachine className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <FaThermometerHalf className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <FaWifi className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Cozinha',
      comodidade2Titulo: 'Lava roupas',
      comodidade3Titulo: 'Aquecedor',
      comodidade4Titulo: 'Wifi'
    },
    {
      id: 3,
      imgSrc: ApartamentoBarcelona,
      destino: 'Barcelona, Espanha',
      desconto: '10% off',
      preco: 'R$1.715',
      comodidade1: <TbToolsKitchen className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <MdKingBed className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <IoIosSnow className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <FaWifi className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Cozinha',
      comodidade2Titulo: 'Cama casal',
      comodidade3Titulo: 'Ar',
      comodidade4Titulo: 'Wifi'
    },
    {
      id: 4,
      imgSrc: ApartamentoLuxemburgo,
      destino: 'Luxemburgo, Luxemburgo',
      desconto: '50% off',
      preco: 'R$925',
      comodidade1: <MdKingBed className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <FaDog className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <FaThermometerHalf className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <FaWifi className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Cama casal',
      comodidade2Titulo: 'Pet friendly',
      comodidade3Titulo: 'Aquecedor',
      comodidade4Titulo: 'Wifi'
    },
    {
      id: 5,
      imgSrc: ApartamentoParis,
      destino: 'Paris, França',
      desconto: '5% off',
      preco: 'R$1.630',
      comodidade1: <MdKingBed className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <FaDog className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <TbToolsKitchen className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <FaWifi className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Cama casal',
      comodidade2Titulo: 'Pet friendly',
      comodidade3Titulo: 'Cozinha',
      comodidade4Titulo: 'Wifi'
    },
    {
      id: 6,
      imgSrc: ApartamentoGlasgow,
      destino: 'Glasgow, Escócia',
      desconto: '20% off',
      preco: 'R$1.840',
      comodidade1: <FaThermometerHalf className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade2: <TbToolsKitchen className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade3: <GiFireplace className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade4: <MdKingBed className={[styles.iconeOfertas, "icone"].join(' ')}/>,
      comodidade1Titulo: 'Aquecedor',
      comodidade2Titulo: 'Cozinha',
      comodidade3Titulo: 'Lareira',
      comodidade4Titulo: 'Cama casal'
    }
  ];

  return (
    <section id='ofertas' className={[styles.ofertas, "container", "section"].join(' ')}>
      <div className={styles.secContainer}>
        <div className="secIntro">
          <h2 className="secTitle">Ofertas Especiais</h2>
          <p>Confira nossas ofertas e conheça o destino que sempre sonhou!</p>
        </div>

        <div className={[styles.conteudoPrincipal, "grid", "conteudoPrincipal"].join(' ')}>
          {
            Ofertas.map(({id, imgSrc, destino, desconto, preco, comodidade1, comodidade2, comodidade3,
            comodidade4, comodidade1Titulo, comodidade2Titulo, comodidade3Titulo, comodidade4Titulo}) => {
              return (
                <div className={styles.oferta}>

            <div className={styles.destinoImagem}>
              <img src={imgSrc} alt={destino} />
              <span className={styles.desconto}>{desconto}</span>
            </div>

            <div className={styles.ofertaDescricao}>
              <div className={[styles.ofertaPreco, "flex"].join(' ')}>
                <h4>{preco}</h4>
                <span className={styles.ofertaStatus}>Disponível</span>
              </div>

              <div className={[styles.ofertaComodidades, "flex"].join(' ')}>
                <div className={[styles.comodidade, "flex"].join(' ')}>
                  {comodidade1}
                  <small>{comodidade1Titulo}</small>
                </div>
                <div className={[styles.comodidade, "flex"].join(' ')}>
                  {comodidade2}
                  <small>{comodidade2Titulo}</small>
                </div>
                <div className={[styles.comodidade, "flex"].join(' ')}>
                  {comodidade3}
                  <small>{comodidade3Titulo}</small>
                </div>
                <div className={[styles.comodidade, "flex"].join(' ')}>
                  {comodidade4}
                  <small>{comodidade4Titulo}</small>
                </div>
              </div>

              <div className={[styles.endereco, "flex"].join(' ')}>
                {<MdLocationOn className={[styles.iconeOfertas, "icone"].join(' ')}/>}
                <small>{destino}</small>
              </div>

              <button className="btn flex" style={{color: 'var(--white)'}}>
                Ver detalhes <BsArrowRightShort className='icone' style={{color: 'var(--white)'}}/>
              </button>
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

export default Ofertas;