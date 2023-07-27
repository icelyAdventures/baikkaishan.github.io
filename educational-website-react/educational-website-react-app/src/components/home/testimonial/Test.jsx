import React from 'react'
import "./style.css"
import Title from '../../common/title/Title'
import { testimonal } from '../../../dummydata'

const Test = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
            <Title subtitle="testimonial" title="our successful students" />

            <div className="content grid2">
                {testimonal.map((val) => (
                    <div className="items shadow">
                        <div className="box flex">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <i className="fa fa-quote-left icon"></i>
                            </div>
                            <div className="name">
                                <h2>{val.name}</h2>
                                <span>{val.post}</span>
                            </div>
                        </div>
                        <p>{val.desc}</p>
                        {/* <i className="fa fa-quote-right icon"></i> */}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Test
