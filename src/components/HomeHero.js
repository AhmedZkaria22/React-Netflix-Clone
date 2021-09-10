import React from 'react'

function HomeHero({heroImg, heroDesc, heroClass, heroVideo}) {
    return (
      <section className={`home__hero ${ heroClass ? heroClass : null }`}>
        <div className='home__hero__cover'>
          <img src={heroImg} alt="img" className='img-fluid'/>
          { heroVideo && <div className='home__hero__cover__video'>
            <video autoPlay='' muted='' loop=''>
              <source src={heroVideo} type="video/mp4"/>
            </video>
          </div>}
        </div>
        <div className='home__hero__desc'>
          <p> {heroDesc[0]} </p>
          <p> {heroDesc[1]} </p>
        </div>
      </section>
    )
}

export default HomeHero
