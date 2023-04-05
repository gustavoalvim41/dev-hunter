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
  } else if (diffInDays < 7) {
    diffString = `${diffInDays} dias atrás`;
  } else if (diffInDays < 30) {
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks === 1) {
      diffString = '1 semana atrás';
    } else {
      diffString = `${diffInWeeks} semanas atrás`;
    }
  } else {
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths === 1) {
      diffString = '1 mês atrás';
    } else {
      diffString = `${diffInMonths} meses atrás`;
    }
  }

  return diffString;
}

const Job = (props) => {
  const [isInterested, setIsInterested] = useState(false)

  const handleToggleInterest = () => {
    setIsInterested(!isInterested);
  }
  return (
    <article 
      key={props.id} 
      className='jobs'
    >
      <div className='publication'>
        <span>{props.career_focus}</span>
        <span>{compareDate(props.publication)}</span>
      </div>

      <h2>{props.title}</h2>

      <ul>
        {
          props.required_skills.slice(0, 3).map((skill) => (
            <li key={skill}>{skill}</li>
          ))
        }
        {props.required_skills.length > 3 && (
          <li>+ {props.required_skills.length - 3}</li>
        )}
      </ul>

      <div className='info'>
        <div>
          <FiMapPin
            color='black'
            size={20}
          />
          <span>{props.type_job}</span>
        </div>
        <div>
          <FiBriefcase
            color='black'
            size={20}
          />
          <span>{props.seniority_level}</span>
        </div>
      </div>

      <div className='salaryRange'>
        <FiDollarSign
          color='black'
          size={20}
        />
        <span>{props.salary_range} ({props.type_contract})</span>
      </div>

      <p>{props.description}</p>

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