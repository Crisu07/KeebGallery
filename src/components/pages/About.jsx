// Info Page
import React from 'react'
import './About.css'
import yeti7 from '../../keebs/yeti7.jpg'
import placeholder from '../../keebs/placeholder2.jpg'
import placeholder2 from '../../keebs/placeholder3.jpg'

export const About = () => {
  return (
    <>
      {/* <div className='about'>Custom Mechanical Keyboard Commissions</div> */}
      <h1>Custom Mechanical Keyboard Commissions</h1>
      <img src={placeholder2} alt="ph2" className='infoimg'/>
      <p>
        Yahallo! Welcome to my page for custom keyboard commissions. This is for customers who wish for me to provide an assembly service for their keyboard, considering they have already acquired all the parts or have worked on getting parts through me.
      </p>
      <br />
      <p>
        Here is a breakdown of my services and what is to be expected:
      </p>
    </>
  )
}
