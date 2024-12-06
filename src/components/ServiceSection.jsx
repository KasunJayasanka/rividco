import React, { useEffect } from "react";
import WOW from "wowjs";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";

const ServiceSection = () => {
  const services = [
    {
      image: "/assets/img/img-600x400-1.jpg",
      icon: "fa-solar-panel",
      title: "Solar Panels",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      image: "/assets/img/img-600x400-2.jpg",
      icon: "fa-wind",
      title: "Wind Turbines",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      image: "/assets/img/img-600x400-3.jpg",
      icon: "fa-lightbulb",
      title: "Hydropower Plants",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      image: "/assets/img/img-600x400-4.jpg",
      icon: "fa-solar-panel",
      title: "Solar Panels",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      image: "/assets/img/img-600x400-5.jpg",
      icon: "fa-wind",
      title: "Wind Turbines",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      image: "/assets/img/img-600x400-6.jpg",
      icon: "fa-lightbulb",
      title: "Hydropower Plants",
      text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-primary">Our Services</h6>
          <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src={service.image} alt={service.title} />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className={`fa ${service.icon} fa-3x`}></i>
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p>{service.text}</p>
                  <a className="small fw-medium" href="#">
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
