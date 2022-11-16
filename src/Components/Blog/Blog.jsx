import React from 'react';
import styles from './Blog.module.css';
import { BsArrowRightShort } from 'react-icons/bs';
import Viagem from '../../Assets/viagem.jpg';
import Madrid from '../../Assets/madridblog.jpg';
import Colmar from '../../Assets/colmar.jpg';
import Amsterda from '../../Assets/amsterdablog.jpg';
import Italia from '../../Assets/italia.jpg';
import Luxemburgo from '../../Assets/luxemburgo.jpg';

const Blog = () => {

  const Posts = [
    {
      id: 1,
      imgSrc: Viagem,
      tituloPost: 'Lista de documentos necessários',
      descricaoPost: 'Veja o que não pode ficar de fora da sua mala!'
    },
    {
      id: 2,
      imgSrc: Madrid,
      tituloPost: 'Roteiro imperdível em Madrid',
      descricaoPost: 'Culinária, cultura e belas paisagens.'
    },
    {
      id: 3,
      imgSrc: Colmar,
      tituloPost: 'Visite Colmar, na França',
      descricaoPost: 'Poucos turistas conhecem esta linda cidade.'
    },
    {
      id: 4,
      imgSrc: Amsterda,
      tituloPost: 'As rotas secretas de Amsterdã',
      descricaoPost: 'Inclua-as em seu roteiro hoje mesmo!'
    },
    {
      id: 5,
      imgSrc: Italia,
      tituloPost: 'Conheça Positano, na Itália',
      descricaoPost: 'Dias românticos sob um cenário de filme.'
    },
    {
      id: 6,
      imgSrc: Luxemburgo,
      tituloPost: 'Um paraíso de nome Luxemburgo',
      descricaoPost: 'Conheça o país mais rico do mundo!'
    }
  ];

  return (
    <section id='blog' className={[styles.blog, "container", "section"].join(' ')}>
      <div className={styles.sectionContainer}>
        <div className="secIntro">
          <h2 className="secTitle">Nosso Blog</h2>
          <p>Confira nossas dicas exclusivas para aproveitar sua viagem sem preocupações.</p>
        </div>

        <div className={[styles.conteudoPrincipal, "grid", "conteudoPrincipal"].join(' ')}>

          {
            Posts.map(({id, imgSrc, tituloPost, descricaoPost}) => {
              return (
                <div className={[styles.post, "grid"].join(' ')}>
                  <div className={styles.postImagem}>
                    <img src={imgSrc} alt={tituloPost} />
                  </div>

                  <div className={styles.postInformacoes}>
                    <h3>{tituloPost}</h3>
                    <p>{descricaoPost}</p>
                  </div>

                  <a href="#" className='flex'>Saiba mais <BsArrowRightShort className={[styles.icone, "icone"].join(' ')}/> </a>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

export default Blog;