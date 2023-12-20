// Process.js
import React from 'react';
import '../css/bootstrap.min.css';

const Process = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <StepItem
            iconClass="fa-globe"
            title="Choose A Destination"
            description="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
            delay="0.1s"
          />
          <StepItem
            iconClass="fa-dollar-sign"
            title="Pay Online"
            description="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
            delay="0.3s"
          />
          <StepItem
            iconClass="fa-plane"
            title="Fly Today"
            description="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
            delay="0.5s"
          />
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ iconClass, title, description, delay }) => {
  return (
    <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay={delay}>
      <div className="position-relative border border-primary pt-5 pb-4 px-4">
        <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: '100px', height: '100px' }}>
          <i className={`fa fa-3x ${iconClass} text-white`}></i>
        </div>
        <h5 className="mt-4">{title}</h5>
        <hr className="w-25 mx-auto bg-primary mb-1" />
        <hr className="w-50 mx-auto bg-primary mt-0" />
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default Process;
