import React from 'react';
import './styles.sass';

const Filter = () => {
  return (
    <div className='filterYourSearch'>
      <div className='clearFilter'>
        <h3>Filtre sua busca</h3>
        <a>Limpar</a>
      </div>
      <div>
        <button 
          className='btnSecondary'
        >
          Filtrar
        </button>
      </div>
    </div>
  )
}

export default Filter;