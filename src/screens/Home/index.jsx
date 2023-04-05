import React, { useState } from 'react';
import './styles.sass';

import { data } from '../../utils/data'

import Job from '../../components/Job';
import Filter from '../../components/Filter';

const Home = () => {
  const [jobs, setJobs] = useState(data)

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
                    salary_range={item.salary_range}
                    publication={item.publication}
                  />
                ))
              }
            </section>

            <div>
              <Filter />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;