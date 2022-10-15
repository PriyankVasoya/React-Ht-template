import React from 'react'
import {Helmet} from "react-helmet";


export default function Home(props) {
  props.changeTitle("home");

  return (
    <>
  {/* Header Start*/}

  <div className="header">
    <div id="header-slider" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#header-slider" data-slide-to={0} className="active" />
        <li data-target="#header-slider" data-slide-to={1} />
        <li data-target="#header-slider" data-slide-to={2} />
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <div className="carousel-content">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a className="btn" href="">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-img">
                <img src="img/slider-1.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="carousel-content">
                <h2>Nulla tristique</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a className="btn" href="">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-img">
                <img src="img/slider-2.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="carousel-content">
                <h2>Pellentesque rutrum</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a className="btn" href="">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-img">
                <img src="img/slider-3.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-slider"
        data-slide="prev"
      >
        <i className="ion-ios-arrow-back" />
      </a>
      <a
        className="carousel-control-next"
        href="#header-slider"
        data-slide="next"
      >
        <i className="ion-ios-arrow-forward" />
      </a>
    </div>
  </div>
  {/* Header End*/}
  {/* About Start*/}
  <div className="about">
    <div className="container">
      <div className="section-header">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="about-img">
            <img src="img/about.jpg" alt="" className="img-fluid" />
          </div>
          <div className="about-content">
            <h2>Welcome to Our Site</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula. Integer ac porttitor mi. In finibus
              vehicula aliquet. Vestibulum et velit placerat pretium lorem Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula. Integer ac porttitor mi. In finibus
              vehicula aliquet. Vestibulum et velit placerat pretium lorem
            </p>
            <a className="btn" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-img">
            <img src="img/about-story.jpg" alt="" className="img-fluid" />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula. Integer ac porttitor mi. In finibus
              vehicula aliquet. Vestibulum et velit placerat pretium lorem
            </p>
            <a className="btn" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-img">
            <img src="img/about-goal.jpg" alt="" className="img-fluid" />
          </div>
          <div className="about-content">
            <h2>Our Goal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula. Integer ac porttitor mi. In finibus
              vehicula aliquet. Vestibulum et velit placerat pretium lorem
            </p>
            <a className="btn" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="service">
    <div className="container">
      <div className="section-header">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-desktop" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">Web Design</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-laptop" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">Web Development</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-tablet-portrait" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">App Design</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-phone-portrait" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">App Development</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-desktop" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">Web Design</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-laptop" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">Web Development</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-tablet-portrait" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">App Design</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="service-item">
            <div className="service-icon">
              <i className="ion-ios-phone-portrait" />
            </div>
            <div className="service-detail">
              <h4>
                <a href="">App Development</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Call To Action Start */}
  <div className="call-to-action">
    <div className="container text-center">
      <div className="section-header">
        <h2>Call to Action</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <a className="btn" href="#">
        Call To Action
      </a>
    </div>
  </div>
  {/* Call To Action End */}
  {/*Pricing start*/}
  <div className="pricing">
    <div className="container">
      <div className="section-header">
        <h2>Our Pricing</h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="price-content">
            <div className="price-plan">
              <i className="ion-md-home" />
              <p className="price-title">Silver</p>
              <h2 className="price-amount">
                <span>$</span>9<span>.99</span>
                <span> / m</span>
              </h2>
            </div>
            <ul className="price-details">
              <li>
                <i className="ion-md-checkmark" />
                <strong>HTML5</strong> and <strong>CSS3</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Bootstrap 4</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Well-commented</strong> code
              </li>
              <li>
                <i className="ion-md-close" />
                <strong>IonIcons</strong> integrated
              </li>
              <li>
                <i className="ion-md-close" />
                Free <strong>Google Font</strong> integrated
              </li>
              <li>
                <i className="ion-md-close" />
                <strong>Responsive</strong> design
              </li>
            </ul>
            <a href="#" className="btn mian-btn price-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-content features-price">
            <div className="price-plan">
              <i className="ion-md-star" />
              <p className="price-title">Gold</p>
              <h2 className="price-amount">
                <span>$</span>19<span>.99</span>
                <span> / m</span>
              </h2>
            </div>
            <ul className="price-details">
              <li>
                <i className="ion-md-checkmark" />
                <strong>HTML5</strong> and <strong>CSS3</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Bootstrap 4</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Well-commented</strong> code
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>IonIcons</strong> integrated
              </li>
              <li>
                <i className="ion-md-checkmark" />
                Free <strong>Google Font</strong> integrated
              </li>
              <li>
                <i className="ion-md-close" />
                <strong>Responsive</strong> design
              </li>
            </ul>
            <a href="#" className="btn mian-btn price-btn features-price-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-content">
            <div className="price-plan">
              <i className="ion-md-gift" />
              <p className="price-title">Platinum</p>
              <h2 className="price-amount">
                <span>$</span>29<span>.99</span>
                <span> / m</span>
              </h2>
            </div>
            <ul className="price-details">
              <li>
                <i className="ion-md-checkmark" />
                <strong>HTML5</strong> and <strong>CSS3</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Bootstrap 4</strong>
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Well-commented</strong> code
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>IonIcons</strong> integrated
              </li>
              <li>
                <i className="ion-md-checkmark" />
                Free <strong>Google Font</strong> integrated
              </li>
              <li>
                <i className="ion-md-checkmark" />
                <strong>Responsive</strong> design
              </li>
            </ul>
            <a href="#" className="btn mian-btn price-btn">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Pricing End*/}
  {/* Skills Start*/}
  <div className="skills">
    <div className="container">
      <div className="section-header">
        <h2>Our Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="skill-item">
            <h3>Front End Skills</h3>
            <div className="skill-name">
              <p>HTML</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>CSS</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>jQuery</p>
              <p>80%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skill-item">
            <h3>Back End Skills</h3>
            <div className="skill-name">
              <p>PHP</p>
              <p>90%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>Laravel</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>MySQL</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Skills End*/}
  {/* Counters Start*/}
  <div className="counters">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-6 text-center">
          <i className="ion-md-person" />
          <h2 data-toggle="counter-up">100</h2>
          <p>Our Staffs</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <i className="ion-md-people" />
          <h2 data-toggle="counter-up">200</h2>
          <p>Our Clients</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <i className="ion-md-checkmark" />
          <h2 data-toggle="counter-up">300</h2>
          <p>Completed Projects</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <i className="ion-md-trending-up" />
          <h2 data-toggle="counter-up">400</h2>
          <p>Running Projects</p>
        </div>
      </div>
    </div>
  </div>
  {/* Counters End*/}
  {/* Portfolio Start */}
  <div className="portfolio">
    <div className="container">
      <div className="section-header">
        <h2>Our Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-1.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-1.jpg"
              data-lightbox="portfolio"
              data-title="Lorem ipsum dolor"
              className="link-preview"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Lorem ipsum dolor</h3>
            <p>Web Design</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-2.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-2.jpg"
              className="link-preview"
              data-lightbox="portfolio"
              data-title="Nulla ullamcorper pharetra"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Nulla ullamcorper pharetra</h3>
            <p>Web Development</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-3.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-3.jpg"
              className="link-preview"
              data-lightbox="portfolio"
              data-title="Phasellus eget dictum"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Phasellus eget dictum</h3>
            <p>App Design</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-4.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-4.jpg"
              data-lightbox="portfolio"
              data-title="Lorem ipsum dolor"
              className="link-preview"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Donec mattis vestibulum</h3>
            <p>App Development</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-5.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-5.jpg"
              className="link-preview"
              data-lightbox="portfolio"
              data-title="Nulla ullamcorper pharetra"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Pellentesque ullamcorper</h3>
            <p>Web Design</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-img">
            <img
              src="img/portfolio-6.jpg"
              className="img-fluid"
              alt="Portfolio"
            />
            <a
              href="img/portfolio-6.jpg"
              className="link-preview"
              data-lightbox="portfolio"
              data-title="Phasellus eget dictum"
              title="Preview"
            >
              <i className="ion-md-eye" />
            </a>
            <a href="" className="link-details" title="More Details">
              <i className="ion-md-open" />
            </a>
          </div>
          <div className="portfolio-info">
            <h3>Sed pretium sapien</h3>
            <p>Web Development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio End */}
  {/* Team Start */}
  <div className="team">
    <div className="container">
      <div className="section-header">
        <h2>Meet our team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6 team-item">
          <div className="team-img">
            <img src="img/team-1.jpg" className="img-fluid" alt="Team Member" />
            <div className="team-social">
              <a href="#">
                <i className="ion-logo-twitter" />
              </a>
              <a href="#">
                <i className="ion-logo-facebook" />
              </a>
              <a href="#">
                <i className="ion-logo-linkedin" />
              </a>
              <a href="#">
                <i className="ion-logo-instagram" />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>John P. Haight</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-item">
          <div className="team-img">
            <img src="img/team-2.jpg" className="img-fluid" alt="Team Member" />
            <div className="team-social">
              <a href="#">
                <i className="ion-logo-twitter" />
              </a>
              <a href="#">
                <i className="ion-logo-facebook" />
              </a>
              <a href="#">
                <i className="ion-logo-linkedin" />
              </a>
              <a href="#">
                <i className="ion-logo-instagram" />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>David R. Bernard</h3>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-item">
          <div className="team-img">
            <img src="img/team-3.jpg" className="img-fluid" alt="Team Member" />
            <div className="team-social">
              <a href="#">
                <i className="ion-logo-twitter" />
              </a>
              <a href="#">
                <i className="ion-logo-facebook" />
              </a>
              <a href="#">
                <i className="ion-logo-linkedin" />
              </a>
              <a href="#">
                <i className="ion-logo-instagram" />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Dana A. Thomas</h3>
            <p>Apps Developer</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-item">
          <div className="team-img">
            <img src="img/team-4.jpg" className="img-fluid" alt="Team Member" />
            <div className="team-social">
              <a href="#">
                <i className="ion-logo-twitter" />
              </a>
              <a href="#">
                <i className="ion-logo-facebook" />
              </a>
              <a href="#">
                <i className="ion-logo-linkedin" />
              </a>
              <a href="#">
                <i className="ion-logo-instagram" />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Ava M. Proctor</h3>
            <p>Apps Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonials Start */}
  <div className="testimonials">
    <div className="container">
      <div className="section-header">
        <h2>Reviews</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="owl-carousel testimonials-carousel">
        <div className="testimonial-item row align-items-center">
          <div className="testimonial-img">
            <img src="img/testimonial-1.jpg" alt="Testimonial image" />
          </div>
          <div className="testimonial-text">
            <h3>Anna M. Brzezinski</h3>
            <h4>businesswoman</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              dictum vel
            </p>
          </div>
        </div>
        <div className="testimonial-item row align-items-center">
          <div className="testimonial-img">
            <img src="img/testimonial-2.jpg" alt="Testimonial image" />
          </div>
          <div className="testimonial-text">
            <h3>Shirley H. Lee</h3>
            <h4>businesswoman</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              dictum vel
            </p>
          </div>
        </div>
        <div className="testimonial-item row align-items-center">
          <div className="testimonial-img">
            <img src="img/testimonial-3.jpg" alt="Testimonial image" />
          </div>
          <div className="testimonial-text">
            <h3>Kerry E. Thomas</h3>
            <h4>businesswoman</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              dictum vel
            </p>
          </div>
        </div>
        <div className="testimonial-item row align-items-center">
          <div className="testimonial-img">
            <img src="img/testimonial-4.jpg" alt="Testimonial image" />
          </div>
          <div className="testimonial-text">
            <h3>Kerry E. Thomas</h3>
            <h4>businesswoman</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              dictum vel
            </p>
          </div>
        </div>
        <div className="testimonial-item row align-items-center">
          <div className="testimonial-img">
            <img src="img/testimonial-5.jpg" alt="Testimonial image" />
          </div>
          <div className="testimonial-text">
            <h3>Kerry E. Thomas</h3>
            <h4>businesswoman</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              dictum vel
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonials End */}
  {/* Clients Start */}
  <div className="clients">
    <div className="container">
      <div className="section-header">
        <h2>Our Clients</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="owl-carousel clients-carousel">
        <img src={process.env.PUBLIC_URL +"img/client-1.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-2.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-3.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-4.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-5.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-6.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-7.jpg"} alt="Client Logo" />
        <img src={process.env.PUBLIV_URL + "img/client-8.jpg"} alt="Client Logo" />
      </div>
    </div>
  </div>
  {/* Clients End */}
  {/* Contact Start */}
  <div className="contact">
    <div className="container">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac lacus eget nunc imperdiet
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form">
            <form className="contactForm">
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button className="btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361250.667320687!2d-113.75533773453304!3d36.24128894212527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1574923227698!5m2!1sen!2sbd"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Helmet>
<script>

  {`
  $('.skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});

$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});

$(".clients-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
});


// Testimonials carousel
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
});

  `}
</script>

  </Helmet>  

</>

  )
}
