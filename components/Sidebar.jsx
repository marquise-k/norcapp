/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DeloitteIcon from '../assets/deloitteicon.png'
import CalendarIcon from '../assets/calendaricon.png'
import PeopleIcon from '../assets/peopleicon.png'
import DashboardIcon from '../assets/dashboardicon.png'
import HelpIcon from '../assets/helpicon.png'
import AppLogo from '../assets/applogo.png'
//import 'font-awesome/scss/font-awesome.scss'

const Sidebar = () => (
  <div className="sidebar-items">
    <div className="logo-area">
      <img className="app-logo" src={AppLogo} alt="A dashboard" />
    </div>
    <div className="sidebar-items-line">
      <a href="/Dashboard" className="button-menu buttons">
        <img className="sidebar-image" src={DashboardIcon} alt="A dashboard" />
        <span className="sidebar-text">Dashboard</span>
      </a>
    </div>

    <div className="sidebar-items-line">
      <a href="/Calendar" className="button-menu buttons">
        <img className="sidebar-image" src={CalendarIcon} alt="A calendar" />
        <span className="sidebar-text">Calendar</span>
      </a>
    </div>

    <div className="sidebar-items-line">
      <a href="/Directory" className="button-menu buttons">
        <img className="sidebar-image" src={PeopleIcon} alt="A directory" />
        <span className="sidebar-text">Directory</span>
      </a>
    </div>

    <div className="sidebar-bottom-line">
      <a href="#" className="button-menu buttons">
        <img className="sidebar-image" src={HelpIcon} alt="A help icon" />
        <span className="sidebar-text">Help</span>
      </a>
    </div>
  </div>
)

export default Sidebar
