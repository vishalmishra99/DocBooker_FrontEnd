import React from 'react'


const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className='banner'>
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p style={{fontSize:"18px"}}>
          The DocBooker is a comprehensive software solution designed 
          to streamline and optimize the administrative, operational, 
          and clinical processes within a healthcare facility. 
          It serves as a centralized platform for managing various 
          aspects of hospital operations, including patient information, 
          appointment scheduling, billing and invoicing, inventory 
          management, and staff coordination.
        </p>
        <p style={{fontSize:"18px"}}>Patients can schedule appointments with doctors or specialists 
          through the system, reducing wait times and improving accessibility 
          to healthcare services. The system also manages appointment reminders 
          and notifications to minimize no-shows</p>
      </div>
    </div>
  )
}

export default Biography