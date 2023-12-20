// Services.js
import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          <ServiceItem iconClass="fa-globe" title="WorldWide Tours" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" delay="0.1s" />
          <ServiceItem iconClass="fa-hotel" title="Hotel Reservation" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" delay="0.3s" />
          <ServiceItem iconClass="fa-user" title="Travel Guides" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" delay="0.5s" />
          <ServiceItem iconClass="fa-cog" title="Event Management" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" delay="0.7s" />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ iconClass, title, description, delay }) => {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className={`fa fa-3x ${iconClass} text-primary mb-4`}></i>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  
};

export default Services;
