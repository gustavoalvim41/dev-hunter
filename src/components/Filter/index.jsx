import React, { useState } from 'react';
import './styles.sass';

const TypeJob = () => {

  const [option, setOption] = useState('');

  function handleCheckboxChange(event) {
    setOption(event.target.value)
  }

  return (
    <div className='typeJob'>
      <h4>Tipo de vaga</h4>
      <div>
        <label htmlFor='checkbox-remoto'>
          <input 
            className='checkMark'
            type='checkbox'
            name='type_job'
            checked={option === 'remoto'}
            onChange={handleCheckboxChange}
            id='checkbox-remoto'
            value='remoto'
          />
          <span>Remoto</span>
        </label>
        <label htmlFor='checkbox-presencial'>
          <input 
            className='checkMark'
            type='checkbox'
            name='type_job'
            checked={option === 'presencial'}
            onChange={handleCheckboxChange}
            id='checkbox-presencial'
            value='presencial'
          />
          <span>Presencial</span>
        </label>
      </div>
    </div>
  )
}

const Filter = () => {
  return (
    <div className='filterYourSearch'>
      <div className='clearFilter'>
        <h3>Filtre sua busca</h3>
        <span onClick={() => {}}>Limpar</span>
      </div>

      <TypeJob />

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