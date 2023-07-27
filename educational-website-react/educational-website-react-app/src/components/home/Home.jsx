import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonial/Test'
import HBlog from './HBlog'
import Hprice from './Hprice'

const Home = () => {
  return (
    <div>
      <Hero /> 
      <AboutCard /> 
      <HAbout />
      <Test />
      <Hprice />
      <HBlog />
    </div>
  )
}

export default Home
