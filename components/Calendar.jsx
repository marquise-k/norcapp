import React, { Component } from 'react'
// import Calendar from "react-calendar";
import Moment from 'react-moment'
import CalendarImage from '../assets/calendarimagefixed.png'

const Calendar = () => {
  return (
    <div className="card-container">
      <div className="wrapper">
        <img
          className="calendar-image"
          src={CalendarImage}
          alt="The calendar"
        />
      </div>
    </div>
  )
}

export default Calendar
