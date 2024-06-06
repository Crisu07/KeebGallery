// Commission Form Page
import React, { useState } from 'react'
import ReqForm from './ReqForm'

export const Commission = () => {
  // Do all the inputs within one usestate rather than having a diff per input
  // set up as object
  const [values, setValues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    discord:'',
    subject:'',
    keyboard:'',
    switches:'',
    info:'',
    info2:'',
  })

  const handleSubmit = (e)=> {
    e.preventDefault(); // prevents page refresh on hitting button

    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }

  // Commission form inputs
  const inputs = [
    {
      id:1,
      name:'First Name',
      type:'text',
      placeholder:'First Name',
      errorMessage: '',
      label:'First Name'
    },
    {
      id:2,
      name:'Last Name',
      type:'text',
      placeholder:'Last Name',
      errorMessage: '',
      label:'Last Name'
    },
    {
      id:3,
      name:'Email',
      type:'text',
      placeholder:'Email',
      errorMessage: 'You must have a valid email!',
      label:'Email'
      //required: true,
    },
    {
      id:4,
      name:'Discord',
      type:'text',
      placeholder:'Discord',
      errorMessage: '',
      label:'Discord'
    },
    {
      id:5,
      name:'Subject',
      type:'text',
      placeholder:'Subject',
      errorMessage: '',
      label:'Subject'
    },
    {
      id:6,
      name:'Keyboard',
      type:'text',
      placeholder:'Keyboard',
      errorMessage: '',
      label:'Keyboard'
    },
    {
      id:7,
      name:'Switches',
      type:'text',
      placeholder:'Switches',
      errorMessage: '',
      label:'Switches'
    },
    {
      id:8,
      name:'Additional Info',
      type:'text',
      placeholder:'Please let me know what services you will need for the build along with other preferences such as spacebar layout, keyboard layout (ISO / Ansi), etc.',
      errorMessage: '',
      label:'Additional Info'
    },
    {
      id:9,
      name:'Comments',
      type:'text',
      placeholder:'Please let me know any additional comments regarding your build.',
      errorMessage: '',
      label:'Comments'
    },
  ]

  const onChange = (e)=> {
    setValues({ ...values, [e.target.name]: e.target.value})
  }
  // console.log(values)

  return (
    <>
      <div className='commissioninfocontainer'>
        {/* <h1 className='commissiontitle'>Commission Request</h1> */}

        {/* Commissions Closed Portion - uncomment when open */}
        <h1 className='commissiontitle'>Commission Request (Closed)</h1>
        <p><strong>Commission requests will be ignored until further notice.There is a limit to how much commissions I can take on. Follow the <a href="https://discord.gg/t4q99vGpjh" target='_blank'>Discord</a> for further updates.</strong> </p>

        <p>I am able to build keyboards if all the parts are provided and delivered to me by the client. Further discussion on commission specifics can be discussed on Discord instead of filling this form.</p>
        <strong>Please only fill out this form if you have already purchased or have all the parts on hand. I will not wait for any group buys or missing parts. </strong> 
        <br />
        <strong>If you have questions or want a quote on a certain build, please <a href="/contact">contact me</a> instead. This form is for commission requests specifically. Any troll or spam requests will be blocked from further commissions.</strong>
        <br />
      </div>
      <div>
        <form className='commissionform' onSubmit={handleSubmit}>
            {/* Map out the inputs and display each one rather than doing line by line */}
            {/* ...input throws in all the values such as placeholder label etc */}
            {/* value searches for the input name */}
            {inputs.map((input) => (
              <ReqForm 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange} 
              />
            ))}
            <br />
            <button className='btn-commission btn-primary-commission'>Commissions Closed</button>
          </form>
      </div>
    </>
  )
}
