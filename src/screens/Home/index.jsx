import React, { useEffect, useState } from 'react';
import './styles.sass';

import { data } from '../../utils/data'

import Job from '../../components/Job';
import Filter from '../../components/Filter';
import Modal from '../../components/Modal';

const Home = () => {
  const [defaultJobs, setDefaultJobs] = useState(data);
  const [jobs, setJobs] = useState(data)

  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div>
      <main>
        <div className='container'>
          <div className='presentation'>
            <h1>As melhores oportunidades para <b>profissionais da tecnologia</b> 🚀</h1>
          </div>
          
          <div className='layout'>
            <section className='devJobs'>
              <div className='jobsAvailable'>
                <p>
                  <b>{jobs.length} vagas</b> disponíveis
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                >
                  Filtrar
                </button>
              </div>
              {
                jobs.map((item) => (
                  <Job 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    career_focus={item.career_focus}
                    required_skills={item.required_skills}
                    type_contract={item.type_contract}
                    seniority_level={item.seniority_level}
                    type_job={item.type_job}
                    location={item.location}
                    salary_range={item.salary_range}
                    publication={item.publication}
                  />
                ))
              }
            </section>

            <div>
              <Filter 
                jobs={jobs} 
                setJobs={setJobs} 
                defaultJobs={defaultJobs}
              />
            </div>
          </div>
        </div>

        <Modal 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Filter
            jobs={jobs}
            setJobs={setJobs}
            defaultJobs={defaultJobs}
          />
        </Modal>
      </main>
    </div>
  )
}

export default Home;