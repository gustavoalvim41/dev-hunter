import React from 'react';
import './styles.sass';

import { data } from '../../utils/data'
import { FiBriefcase, FiMapPin, FiDollarSign } from "react-icons/fi";
import { isToday, isYesterday, differenceInDays } from 'date-fns';

const compareDate = (date) => {
  const myDate = new Date(date);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  let diffInDays = differenceInDays(today, myDate);

  if (isToday(myDate)) {
    diffInDays = 0;
  } else if (isYesterday(myDate)) {
    diffInDays = 1;
  }

  let diffString;

  if (diffInDays === 0) {
    diffString = 'hoje';
  } else if (diffInDays === 1) {
    diffString = 'ontem';
  } else if (diffInDays > 1) {
    diffString = `${diffInDays} dias atrás`;
  }

  return diffString;
}

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
              <div className='jobsAvailable'>
                <p>
                  <b>{data.length} vagas</b> disponíveis
                </p>
              </div>
              {
                data.map((item) => (
                  <article key={item.id}>
                    <div className='publication'>
                      <span>{item.career_focus}</span>
                      <span>{compareDate(item.publication)}</span>
                    </div>

                    <h2>{item.title}</h2>

                    <ul>
                      {
                        item.required_skills.slice(0, 3).map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))
                      }
                      {item.required_skills.length > 3 && (
                        <li>+ {item.required_skills.length - 3}</li>
                      )}
                    </ul>

                    <div className='info'>
                      <div>
                        <FiMapPin 
                          color='black'
                          size={20}
                        />
                        <span>{item.work_arrangement}</span>
                      </div>
                      <div>
                        <FiBriefcase 
                          color='black'
                          size={20}
                        />
                        <span>{item.seniority_level}</span>
                      </div>
                    </div>

                    <div className='salaryRange'>
                      <FiDollarSign 
                        color='black'
                        size={20}
                      />
                      <span>{item.salary_range} ({item.type})</span>
                    </div>

                    <p>{item.description}</p>

                    <div className='buttonWrapper'>
                      <button className='btnPrimary'>Tenho interesse nessa vaga</button>
                    </div>
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