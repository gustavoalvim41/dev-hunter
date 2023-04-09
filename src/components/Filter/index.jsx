import React, { useState } from 'react';
import './styles.sass';

const TypeJob = ({
  handleTypeJobChange, 
  isCheckedRemoto, 
  setIsCheckedRemoto, 
  isCheckedPresencial, 
  setIsCheckedPresencial}) => {
  return (
    <div className='filterWrapper'>
      <h4>Tipo de vaga</h4>
      <div>
        <label 
          htmlFor='checkbox-remoto'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='type_job'
            checked={isCheckedRemoto}
            onClick={() => setIsCheckedRemoto(!isCheckedRemoto)}
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
            checked={isCheckedPresencial}
            onClick={() => setIsCheckedPresencial(!isCheckedPresencial)}
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

const SeniorityLevel = ({
  handleSeniorityLevelChange, 
  isCheckedJunior, 
  setIsCheckedJunior, 
  isCheckedPleno, 
  setIsCheckedPleno, 
  isCheckedSenior, 
  setIsCheckedSenior}) => {
  return (
    <div className='filterWrapper'>
      <h4>Senioridade</h4>
      <div>
        <label 
          htmlFor='checkbox-junior'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='seniority_level'
            checked={isCheckedJunior}
            onClick={() => setIsCheckedJunior(!isCheckedJunior)}
            onChange={handleSeniorityLevelChange}
            id='checkbox-junior'
            value='Júnior'
          />
          <span>Júnior</span>
        </label>
        <label 
          htmlFor='checkbox-pleno'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='seniority_level'
            checked={isCheckedPleno}
            onClick={() => setIsCheckedPleno(!isCheckedPleno)}
            onChange={handleSeniorityLevelChange}
            id='checkbox-pleno'
            value='Pleno'
          />
          <span>Pleno</span>
        </label>
        <label 
          htmlFor='checkbox-senior'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='seniority_level'
            checked={isCheckedSenior}
            onClick={() => setIsCheckedSenior(!isCheckedSenior)}
            onChange={handleSeniorityLevelChange}
            id='checkbox-senior'
            value='Sênior'
          />
          <span>Sênior</span>
        </label>
      </div>
    </div>
  )
}

const TypeContract = ({
  isCheckedClt,
  setIsCheckedClt,
  isCheckedPj,
  setIsCheckedPj,
  handleTypeContractChange
  }) => {
  return (
    <div className='filterWrapper'>
      <h4>Regime de trabalho</h4>
      <div>
        <label 
          htmlFor='checkbox-clt'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='type_contract'
            checked={isCheckedClt}
            onClick={() => setIsCheckedClt(!isCheckedClt)}
            onChange={handleTypeContractChange}
            id='checkbox-clt'
            value='CLT'
          />
          <span>CLT</span>
        </label>
        <label 
          htmlFor='checkbox-pj'
        >
          <input 
            className='checkMark'
            type='checkbox'
            name='type_contract'
            checked={isCheckedPj}
            onClick={() => setIsCheckedPj(!isCheckedPj)}
            onChange={handleTypeContractChange}
            id='checkbox-pj'
            value='PJ'
          />
          <span>PJ</span>
        </label>
      </div>
    </div>
  )
}

const Filter = ({defaultJobs, setJobs}) => {
  const [typeJob, setTypeJob] = useState([])
  const [seniorityLevel, setSeniorityLevel] = useState([])
  const [typeContract, setTypeContract] = useState([])

  const [isCheckedRemoto, setIsCheckedRemoto] = useState(false)
  const [isCheckedPresencial, setIsCheckedPresencial] = useState(false)
  const [isCheckedJunior, setIsCheckedJunior] = useState(false)
  const [isCheckedPleno, setIsCheckedPleno] = useState(false)
  const [isCheckedSenior, setIsCheckedSenior] = useState(false)
  const [isCheckedClt, setIsCheckedClt] = useState(false)
  const [isCheckedPj, setIsCheckedPj] = useState(false)

  const handleTypeJobChange = (e) => {
    const selectedTypeJob = e.target.value;
    if (typeJob.includes(selectedTypeJob)) {
      setTypeJob(typeJob.filter((type) => type !== selectedTypeJob))
    } else {
      setTypeJob([...typeJob, selectedTypeJob])
    }
  }

  const handleSeniorityLevelChange = (e) => {
    const selectedSeniorityLevel = e.target.value;
    if (seniorityLevel.includes(selectedSeniorityLevel)) {
      setSeniorityLevel(seniorityLevel.filter((seniority) => seniority !== selectedSeniorityLevel))
    } else {
      setSeniorityLevel([...seniorityLevel, selectedSeniorityLevel])
    }
  }

  const handleTypeContractChange = (e) => {
    const selectedTypeContract = e.target.value;
    if (typeContract.includes(selectedTypeContract)) {
      setTypeContract(typeContract.filter((contract) => contract !== selectedTypeContract))
      console.log(typeContract)
    } else {
      setTypeContract([...typeContract, selectedTypeContract])
      console.log(typeContract)
    }
  }
  
  const filtering = () => {
    let filteringData = defaultJobs
    
    if (typeJob.length > 0 || seniorityLevel.length > 0 || typeContract.length > 0) {
      filteringData = defaultJobs.filter((job) => {
        const typeMatch = typeJob.length === 0 || typeJob.includes(job.type_job)
        const seniorityMatch = seniorityLevel.length === 0 || seniorityLevel.includes(job.seniority_level)
        const contractMatch = typeContract.length === 0 || typeContract.includes(job.type_contract)

        return typeMatch && seniorityMatch && contractMatch
      })
    }
  
    setJobs(filteringData)
  }
  

  const clearFilter = () => {
    setTypeJob([])
    setJobs(defaultJobs)

    setIsCheckedRemoto(false)
    setIsCheckedPresencial(false)
    setIsCheckedJunior(false)
    setIsCheckedPleno(false)
    setIsCheckedSenior(false)
    setIsCheckedClt(false)
    setIsCheckedPj(false)
  }

  return (
    <div className='filterYourSearch'>
      <div className='clearFilter'>
        <h3>Filtre sua busca</h3>
        <span onClick={clearFilter}>Limpar</span>
      </div>

      <TypeJob
        isCheckedRemoto={isCheckedRemoto}
        setIsCheckedRemoto={setIsCheckedRemoto}
        isCheckedPresencial={isCheckedPresencial}
        setIsCheckedPresencial={setIsCheckedPresencial}
        handleTypeJobChange={handleTypeJobChange} 
      />

      <SeniorityLevel 
        isCheckedJunior={isCheckedJunior}
        setIsCheckedJunior={setIsCheckedJunior}
        isCheckedPleno={isCheckedPleno}
        setIsCheckedPleno={setIsCheckedPleno}
        isCheckedSenior={isCheckedSenior}
        setIsCheckedSenior={setIsCheckedSenior}
        handleSeniorityLevelChange={handleSeniorityLevelChange} 
      />

      <TypeContract 
        isCheckedClt={isCheckedClt}
        setIsCheckedClt={setIsCheckedClt}
        isCheckedPj={isCheckedPj}
        setIsCheckedPj={setIsCheckedPj}
        handleTypeContractChange={handleTypeContractChange} 
      />

      <div>
        <button 
          className='btnSecondary'
          onClick={filtering}
        >
          Filtrar
        </button>
      </div>
    </div>
  )
}

export default Filter;