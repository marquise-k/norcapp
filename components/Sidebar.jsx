/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DeloitteIcon from '../assets/deloitteicon.png'
import CalendarIcon from '../assets/calendaricon.png'
import PeopleIcon from '../assets/peopleicon.png'
import DashboardIcon from '../assets/dashboardicon.png'
import HelpIcon from '../assets/helpicon.png'

const Sidebar = () => (
  <div className="sidebar-items">
    <img className="deloitte-image" src={DeloitteIcon} alt="A dashboard" />
    <div className="sidebar-items-line">
      <img className="dashboard-image" src={DashboardIcon} alt="A dashboard" />
      <a href="/Dashboard" className="button-menu buttons">
        Dashboard
      </a>
    </div>
    <div className="sidebar-items-line">
      <img className="calendar-image" src={CalendarIcon} alt="A calendar" />
      <a href="/Calendar" className="button-menu buttons">
        Calendar
      </a>
    </div>
    <div className="sidebar-items-line">
      <img className="people-image" src={PeopleIcon} alt="A directory" />
      <a href="/Directory" className="button-menu buttons">
        Directory
      </a>
    </div>
    <div>
      <img className="help-image" src={HelpIcon} alt="A help icon" />
      <a href="#" className="button-menu buttons">
        Help
      </a>
    </div>
  </div>
)

export default Sidebar
