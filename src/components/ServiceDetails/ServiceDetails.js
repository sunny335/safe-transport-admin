import React from 'react';

const ServiceDetails = ({ data }) => {
  return (
    <div className="col-sm-6 col-md-6  col-lg-4 text-center mt-4 mx-auto">
      <img style={{ height: '60px' }} src={data.img} alt="" />
      <h5 className="my-3">{data.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores
        eligendi debitis officia maxime quos natus distinctio!
      </p>
    </div>
  );
};

export default ServiceDetails;
