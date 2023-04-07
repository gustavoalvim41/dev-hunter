import React, { useState } from 'react';
import './styles.sass';

const TypeJob = ({handleTypeJobChange}) => {
  return (
    <div className='typeJob'>
      <h4>Tipo de vaga</h4>
      <div>
        <label 
          htmlFor='checkbox-remoto'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='type_job'
            onChange={handleTypeJobChange}
            id='checkbox-remoto'
            value='Remoto'
          />
          <span>Remoto</span>
        </label>
        <label 
          htmlFor='checkbox-presencial'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='type_job'
            onChange={handleTypeJobChange}
            id='checkbox-presencial'
            value='Presencial'
          />
          <span>Presencial</span>
        </label>
      </div>
    </div>
  )
}

const Filter = ({defaultJobs, setJobs}) => {
  const [typeJob, setTypeJob] = useState('');

  const [isCheckedRemoto, setIsCheckedRemoto] = useState()
  const [isCheckedPresencial, setIsCheckedPresencial] = useState()

  const handleTypeJobChange = (e) => {
    const selectedTypeJob = e.target.value;
    if (typeJob.includes(selectedTypeJob)) {
      setTypeJob(typeJob.filter((type) => type !== selectedTypeJob));
    } else {
      setTypeJob([...typeJob, selectedTypeJob]);
    }
  }

  const filtered = () => {
    let filteredData = defaultJobs

    if (typeJob.length > 0) {
      filteredData = filteredData.filter((job) => typeJob.includes(job.type_job));
    }

    setJobs(filteredData)
  }

  const clearFilter = () => {
    setTypeJob([])
    setJobs(defaultJobs)
  }

  return (
    <div className='filterYourSearch'>
      <div className='clearFilter'>
        <h3>Filtre sua busca</h3>
        <span onClick={clearFilter}>Limpar</span>
      </div>

      <TypeJob
        handleTypeJobChange={handleTypeJobChange} 
      />

      <div>
        <button 
          className='btnSecondary'
          onClick={filtered}
        >
          Filtrar
        </button>
      </div>
    </div>
  )
}

export default Filter;