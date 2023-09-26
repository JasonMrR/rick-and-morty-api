import './CharacterDetails.css';

const CharacterDetails = ({ character, onClose }) => {
  return (
    <div className="modal" onClick={(e) => { onClose(e) }}>
      <div className="modal__content" onClick={(e) => { e.stopPropagation() }}>
        <div className="modal__header">
          <h2 className="modal__title">{character.name}</h2>
          <p className={`modal__status ${character.status === 'Alive' ? 'alive' : 'dead'}`}>
            {character.status}
          </p>
        </div>
        <div className="modal__body">
          
        </div>
      </div>
    </div>

  );
};

export default CharacterDetails