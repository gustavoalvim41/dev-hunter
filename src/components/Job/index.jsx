import React, { useState } from 'react';
import './styles.sass';

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

const Job = ({
  id, 
  title, 
  description, 
  career_focus, 
  required_skills, 
  type, 
  seniority_level, 
  work_arrangement, 
  salary_range, 
  publication
  }) => {
  const [isInterested, setIsInterested] = useState(false)

  const handleToggleInterest = () => {
    setIsInterested(!isInterested);
  }
  return (
    <article 
      key={id} 
      className='jobs'
    >
      <div className='publication'>
        <span>{career_focus}</span>
        <span>{compareDate(publication)}</span>
      </div>

      <h2>{title}</h2>

      <ul>
        {
          required_skills.slice(0, 3).map((skill) => (
            <li key={skill}>{skill}</li>
          ))
        }
        {required_skills.length > 3 && (
          <li>+ {required_skills.length - 3}</li>
        )}
      </ul>

      <div className='info'>
        <div>
          <FiMapPin
            color='black'
            size={20}
          />
          <span>{work_arrangement}</span>
        </div>
        <div>
          <FiBriefcase
            color='black'
            size={20}
          />
          <span>{seniority_level}</span>
        </div>
      </div>

      <div className='salaryRange'>
        <FiDollarSign
          color='black'
          size={20}
        />
        <span>{salary_range} ({type})</span>
      </div>

      <p>{description}</p>

      <div className='buttonWrapper'>
        <button
          onClick={handleToggleInterest}
          className={isInterested ? 'btnInterested' : 'btnPrimary'}>
          {isInterested ? 'Você demonstrou interesse nessa vaga! 👍' : 'Tenho interesse nessa vaga'}
        </button>
      </div>
    </article>
  )
}

export default Job;