/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CalendarIcon from '../assets/calendaricon.png';
import PeopleIcon from '../assets/peopleicon.png';
import DashboardIcon from '../assets/dashboardicon.png';
import HelpIcon from '../assets/helpicon.png';
import AppLogo from '../assets/applogo.png';

//import 'font-awesome/scss/font-awesome.scss'

const Sidebar = ({ value }) => {
  const returnClassName = linkName => {
    if (value === linkName) {
      return 'sidebar-text sidebar-text-selected';
    }

    return 'sidebar-text';
  };

  console.log(value);

  return (
    <>
      <div className="sidebar-items">
        <div className="logo-area">
          <img className="app-logo" src={AppLogo} alt="A dashboard" />
        </div>
        <div className="sidebar-items-line">
          <Link href="/index">
            <a className="button-menu buttons">
              <img
                className="sidebar-image"
                src={DashboardIcon}
                alt="A dashboard"
              />
              <span className={returnClassName('dashboard')}>Dashboard</span>
            </a>
          </Link>
        </div>

        <div className="sidebar-items-line">
          <Link href="/CalendarPage">
            <a className="button-menu buttons">
              <img
                className="sidebar-image"
                src={CalendarIcon}
                alt="A calendar"
              />
              <span className={returnClassName('calendar')}>Calendar</span>
            </a>
          </Link>
        </div>

        <div className="sidebar-items-line">
          <Link href="/DirectoryPage">
            <a className="button-menu buttons">
              <img
                className="sidebar-image"
                src={PeopleIcon}
                alt="A directory"
              />
              <span className={returnClassName('directory')}>Directory</span>
            </a>
          </Link>
        </div>

        <div className="sidebar-bottom-line">
          <a href="#" className="button-menu buttons">
            <img className="sidebar-image" src={HelpIcon} alt="A help icon" />
            <span className="sidebar-text">Help</span>
          </a>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Sidebar;
