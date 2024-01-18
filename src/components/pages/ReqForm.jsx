// Commission Request Form
import React from 'react'
import './Commission.css'

// makes it easier than doing a separate input per criteria
const ReqForm = (props) => {
  return (
    <div>
        <label>First Name</label>
        <input placeholder={props.placeholder} onChange={e=>props.setFirst(e.target.value)} className='commissioninput'/>
    </div>
  )
}

export default ReqForm