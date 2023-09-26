'use client'
import Link from 'next/link'
import {motion, variants} from 'framer-motion'
import './CardItem.css'

const CardItem = ({character, handleShow}) => {
  const itemVarinats = {
    hidden: { opacity: 0, y: 10},
    show: { opacity: 1, y: 0},
  }

  return (
    <motion.article 
      initial="hidden"
      whileInView="show"
      variants={itemVarinats}
      transition={{ duration: 0.5}}
      viewport={{ once: true, amount: 0.5 }}
      className="card"
    >
      <figure className="card__figure">
        <img className="card__img" src={character.image} alt={character.name} />
      </figure>
      <div className="card-details">
        <div>
          <motion.h2
            initial={{x:-10}}
            whileInView={{x: 0}}
            transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
          >{character.name}</motion.h2>
          <p><b>Status</b>: {character.status}</p>
          <p><b>Species</b>: {character.species}</p>
          <p><b>Episodes</b>: {character.episode.length}</p>
        </div>
        <button onClick={()=>{handleShow(character)}}>Details</button>
      </div>
    </motion.article>
  );
};

export default CardItem;
