import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';
const InfoCard = ({ info }) => {
  return (
    <div className="col-lg-4 info-card mt-3">
      <div
        className={`text-white mr-3 info-container d-flex justify-content-center info-${info.background}`}
      >
        <div className="mr-3">
          <FontAwesomeIcon className="info-icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small className="">{info.discription}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
