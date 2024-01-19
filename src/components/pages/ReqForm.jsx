// Commission Request Form
import React from 'react'
import './Commission.css'

// makes it easier than doing a separate input per criteria
const ReqForm = (props) => {
  const {label, onChange, id, ...inputProps} = props;

  // last two inputs should have an expandable textbox
  const isText = id > 7;
  return (
    <div className='reqForm'>
      <label className='commissionlabel'>{label}</label>
      {isText ? (
        <textarea {...inputProps} onChange={onChange} className='commissiontextarea'/>
      ):
      (
        <input {...inputProps} onChange={onChange} className='commissioninput'/>
      )}
    </div>
  )
}

export default ReqForm