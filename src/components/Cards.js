import React from "react";
import PropTypes from "prop-types";

// const Cards = props => (
//   <div className="event-card">
//     <div className="event-card card">
//       <img className="card-img-top" src={props.card.imageUrl} alt="" />
//       <div className="card-body">
//         <h4 className="event-title">{props.event.title}</h4>
//         <hr />
//         <img className="date-time-icon" src={props.card.timeicon} alt="" />
//         <h6 className="card-subtitle mb-2 text-muted">{props.event.time}</h6>
//         <h6 className="card-subtitle mb-2 text-muted">{props.event.date}</h6>
//         <img className="date-time-icon" src={props.card.texticon} alt="" />
//         <p className="text-justify" style={{ fontSize: "14px" }}>
//           {props.event.description}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// Cards.defaultProps = {
//   event: {}
// };

// Cards.propTypes = {
//   event: PropTypes.object
// };

const Cards = () => {
  return (
    <div>
      <img src="" alt="" />
      <h4>Title</h4>
      <hr />
      <h6>Time</h6>
      <h6>Day</h6>
      <p></p>
      <p>Description</p>
    </div>
  );
};
export default Cards;
