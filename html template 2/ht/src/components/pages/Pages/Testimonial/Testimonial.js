import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Testimonial(props) {
    props.changeTitle("testimonial");

  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              Testimonial
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
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
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Testimonial
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <Carousel>
           
           <div className="testimonial-item text-center">
             <img className="border rounded-circle p-2 mx-auto mb-3"
               src="img/testimonial-1.jpg"
               style={{ width: 80, height: 80 }} />

             <h5 className="mb-0">Client Name</h5>
             <p>Profession</p>
             <div className="testimonial-text bg-light text-center p-4">
               <p className="mb-0">
                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
                 diam et eos. Clita erat ipsum et lorem et sit.
               </p>
             </div>
           </div>
           <div className="testimonial-item text-center">
             <img
               className="border rounded-circle p-2 mx-auto mb-3"
               src="img/testimonial-2.jpg"
               style={{ width: 80, height: 80 }}
             />
             <h5 className="mb-0">Client Name</h5>
             <p>Profession</p>
             <div className="testimonial-text bg-light text-center p-4">
               <p className="mb-0">
                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
                 diam et eos. Clita erat ipsum et lorem et sit.
               </p>
             </div>
           </div>
           <div className="testimonial-item text-center">
             <img
               className="border rounded-circle p-2 mx-auto mb-3"
               src="img/testimonial-3.jpg"
               style={{ width: 80, height: 80 }}
             />
             <h5 className="mb-0">Client Name</h5>
             <p>Profession</p>
             <div className="testimonial-text bg-light text-center p-4">
               <p className="mb-0">
                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
                 diam et eos. Clita erat ipsum et lorem et sit.
               </p>
             </div>
           </div>
           <div className="testimonial-item text-center">
             <img
               className="border rounded-circle p-2 mx-auto mb-3"
               src="img/testimonial-4.jpg"
               style={{ width: 80, height: 80 }}
             />
             <h5 className="mb-0">Client Name</h5>
             <p>Profession</p>
             <div className="testimonial-text bg-light text-center p-4">
               <p className="mb-0">
                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
                 diam et eos. Clita erat ipsum et lorem et sit.
               </p>
             </div>
           </div>
         
                             </Carousel>
      </div>
    </div>
  </>
  


  )
}
