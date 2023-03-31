import React from 'react';
import './styles.sass';

import { data } from '../../utils/data'

const Home = () => {
  return (
    <div>
      <main>
        <div className='container'>
          <div className='presentation'>
            <h1>As melhores oportunidades para <b>profissionais da tecnologia</b> 🚀</h1>
          </div>
          
          <div className='layout'>
            <section className='devJobs'>
              {
                data.map((item) => (
                  <article key={item.id}>
                    <p>{item.career_focus}</p>
                    <p>{item.publication}</p>
                    <h2>{item.title}</h2>

                    <ul>
                      {
                        item.required_skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))
                      }
                    </ul>

                    <p>{item.work_arrangement}</p>
                    <p>{item.seniority_level}</p>
                    <p>{item.salary_range}</p>

                    <p>{item.description}</p>

                    <button>Tenho interesse nessa vaga</button>
                  </article>
                ))
              }
            </section>

            <div className='filterYourSearch'>
              filter
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;