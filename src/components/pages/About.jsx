// Info Page
import React from 'react'
import './About.css'
import placeholder2 from '../../keebs/placeholder3.jpg'

export const About = () => {
  return (
    <>
      {/* <div className='about'>Custom Mechanical Keyboard Commissions</div> */}
      <h1 className='infotitle'>Custom Mechanical Keyboard Commissions</h1>
      <img src={placeholder2} alt="ph2" className='infoimg'/>
      <div className='infodetails'>
      <p>
        Yahallo! My name is Chris Nguyen and welcome to my page for custom keyboard commissions. This is for customers who wish for me to provide an assembly service for their keyboard, considering they have already acquired all the parts or have worked on getting parts through me.
      </p>
      <p>If you guys are new to the hobby and wish for some recommendations on switches, boards, and other parts - feel free to reach out to me on <a href="https://discord.gg/tdv8sewx2M" target='_blank'>Discord</a> or <a href="/contact">Email</a>! This is completely free as my way of building a community and helping others join this hobby.</p>
      <br />
      <p>
        Here is a breakdown of my services and what is to be expected (Anything involving soldering is unavailable at the moment due to my soldering kit breaking):
      </p>
      <strong>Provided by Me:</strong>
      <li>Recommendations on Switches, Boards, and other Parts</li>
      <li>Clipping and Lubing Stabilizers</li>
      <li>Lubing Switches</li>
      <li>Soldering Switches</li>
      <li>Flashing the keymap and setting it up in VIA</li>
      <br />
      <strong>Provided by Client:</strong>
      <p>These will vary as some may buy parts through me or have me order the parts for them through various discounts and sellers.</p>
      <li>Keyboard case, plate and PCB</li>
      <li>Switches</li>
      <li>Stabilizers</li>
      <li>Shipping costs to/from me (Local Pickup / Drop off available if applicable, can be discussed)</li>
      <br />
      <strong>Other add-ons at additional costs</strong>
      <li>Switch Film - for Filming switches</li>
      <li>Keyboard Mods - Foam and other things</li>
      <li>Soldering Millmax sockets - turns Soldered PCBs into hotswap</li>
      <li>Soldering LEDs and other things</li>
      <li>Dinner Date</li>
      <br />
      <strong>Completed Builds:</strong>
      <li>My previous builds can be found in my <a href="/portfolio">Portfolio</a>.</li>
      <li>Sound Tests of some boards can be found on my <a href="https://www.youtube.com/@acrisu/videos" target='_blank'>YouTube</a>.</li>
      <br />
      <strong>Pricing and Shipping:</strong>
      <li>Pricing begins at $80 for a full build, please reach out to me to get a quote. Prices will vary depending on the build or services you need me to do.</li>
      <li>I prefer working only with those in the United States at the moment, but again, please reach out to me if there are questions regarding this. Prices and Carrier for shipping varies and can be discussed depending on what the client wants. Local meetup is available when possible. </li>
      <br />
      <strong>Disclaimers:</strong>
      <li>While I am responsible for completing the build, anything that I break or mess up will be paid for out of my own expense to fix it. Any issues regarding how the parts were broken on arrival, manufacturing issue or any other issues once the board leaves my possession lies solely on the client to get it sorted. I am willing to take the board back and do what I can to fix it at the client's expense.</li>
      <li>I will test the board to ensure that everything is working before sending it out.</li>
      </div>
    </>
  )
}
