import React, { Component } from "react";
import PropTypes from "prop-types";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.changeCategory("headlights");
            }}
          >
            car lights
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.changeCategory("tires");
            }}
          >
            Car wheels
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.changeCategory("bumpers");
            }}
          >
            car bumpers
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.changeCategory("audio");
            }}
          >
            car audiosystem
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.changeCategory("engine");
            }}
          >
            Truck bumpers
          </a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

TopNav.propTypes = {
  changeCategory: PropTypes.func
};

export default TopNav;
