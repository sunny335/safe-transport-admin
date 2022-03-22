import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {
  faClock,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
const infosData = [
  {
    title: 'opening hours ',
    discription: 'we are open 7 days',
    icon: faClock,
    background: 'Primary',
  },
  {
    title: 'Visit Out location',
    discription: 'Brooklyn ,NY 10003 USA',
    icon: faMapMarker,
    background: 'dark',
  },
  {
    title: 'Call us now ',
    discription: '+1438259235',
    icon: faPhone,
    background: 'Primary',
  },
];
const BussinesInfo = () => {
  return (
    <section className="row  mx-auto mt-sm-5 mt-md-5 ">
      {infosData.map((info) => (
        <InfoCard key={info.title} info={info} />
      ))}
    </section>
  );
};

export default BussinesInfo;
