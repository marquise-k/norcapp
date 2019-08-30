import React, { Component } from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <a href="/Dashboard" className="button-menu buttons">
          Dashboard
        </a>

        <a href="/Calendar" className="button-menu buttons">
          Calendar
        </a>

        <a href="/Directory" className="button-menu buttons">
          Directory
        </a>
      </div>
    );
  }
}

export default Sidebar;
