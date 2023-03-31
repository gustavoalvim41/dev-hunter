import React, { useState } from 'react';
import './styles.sass';

import { data } from '../../utils/data'

import Job from '../../components/Job';

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
                    type={item.type}
                    seniority_level={item.seniority_level}
                    work_arrangement={item.work_arrangement}
                    salary_range={item.salary_range}
                    publication={item.publication}
                  />
                ))
              }
            </section>

            <div>
              <div className='filterYourSearch'>
                <h3>Filtre sua busca</h3>
                <a>Limpar</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;