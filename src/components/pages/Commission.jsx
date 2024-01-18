// Commission Form Page
import React, { useState } from 'react'
import ReqForm from './ReqForm'

export const Commission = () => {
  const [firstname, setFirst] = useState('')
  const [lastname, setLast] = useState('')

  // console.log(firstname)

  return (
    <>
      <div className='commissioninfocontainer'>
      {/* <h1 className='commissiontitle'>Commission Request</h1> */}

      {/* Commissions Closed Portion - uncomment when open */}
      <h1 className='commissiontitle'>Commission Request (Closed)</h1>
      <p><strong>Commission requests will be ignored until further notice.</strong> There is a limit to how much commissions I can take on. Follow the <a href="https://discord.gg/t4q99vGpjh" target='_blank'>Discord</a> for further updates.</p>

      <p>I am able to build keyboards if all the parts are provided and delivered to me by the client. Further discussion on commission specifics can be discussed on <a href="https://discord.gg/t4q99vGpjh" target='_blank'>Discord</a> instead of filling this form.</p>
      <strong>Please only fill out this form if you have already purchased or have all the parts on hand. I will not wait for any group buys or missing parts.</strong>
      </div>
      <div className='commissionformcontainer'>
        <form>
          <ReqForm placeholder='First Name' setFirst={setFirst}/>
          <ReqForm placeholder='Last Name'/>
          <ReqForm placeholder='Email Address'/>
          <ReqForm placeholder='Discord'/>
          <ReqForm placeholder='Subject'/>
          <ReqForm placeholder='Keyboard'/>
          <ReqForm placeholder='Switches'/>
          <ReqForm placeholder='Additional Keyboard Info'/>
          <ReqForm placeholder='Comments'/>
        </form>
      </div>
    </>
  )
}
