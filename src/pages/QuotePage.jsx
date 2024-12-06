import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import Spinner from "../components/Spinner";


const QuotePage = () => {
  return (
    <>

      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Free Quote</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Free Quote
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Quote Section */}
      <div className="      container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="assets/img/quote.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Free Quote"
                />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Free Quote</h6>
                <h1 className="mb-4">Get A Free Quote</h1>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam
                  et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat
                  amet
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0" style={{ height: "55px" }}>
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Note"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default QuotePage;
