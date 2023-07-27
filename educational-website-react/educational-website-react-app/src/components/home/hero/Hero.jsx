import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <div>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero, at libero quae minus consequatur! Numquam architecto molestiae debitis quo. Laboriosam aliquid soluta, asperiores id reiciendis quasi esse. Eius, quo.</p>
              <div className="button">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button className="primary-btn">
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="marigin"></div>
    </div>
  )
}

export default Hero
