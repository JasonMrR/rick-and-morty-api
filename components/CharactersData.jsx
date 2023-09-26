'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import CharacterDetails from './CharacterDetails'
import CardItem from './CardItem'

const CharactersData = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const containerVarinats = {
    hidden: { opacity: 0},
    show: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 2
      }
    },
  }

  const handleShow = (item) => {
    setItemSelected(item);
    setShowDetails(true);
  }

  const onClose = () => {
    setItemSelected({});
    setShowDetails(false);
  }

  return (
    <secction>
      {showDetails?<CharacterDetails character={itemSelected} onClose={onClose}/>:null}
      <motion.section 
        className="items-container"
        initial="hidden"
        animate="show"
        variants={containerVarinats}
      >
        {
          data.results?.map((item, index)=><CardItem key={index} character={item} handleShow={handleShow}/>)
        }
      </motion.section>
    </secction>
  )
}
export default CharactersData