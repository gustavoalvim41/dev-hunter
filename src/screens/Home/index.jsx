import React from 'react';
import './styles.sass';

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
              <article>jobs</article>
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