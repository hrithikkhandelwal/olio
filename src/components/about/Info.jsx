import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>  
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 Months Working</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">B.Tech. C.S.</h3>
            <span className="about__subtitle">April 2022</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Contact</h3>
            <span className="about__subtitle">FullTime SWE Roles</span>
        </div>
    </div>
  )
}

export default Info