import React from 'react'
import { Helmet } from 'react-helmet'

export default function Clients(props) {
    props.changeTitle("client");

  return (
    <div>
       <div class="clients mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Our Clients</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet  
                    </p>
                </div>

                <div class="owl-carousel clients-carousel">
                    <img src="img/client-1.jpg" alt="Client Logo"/>
                    <img src="img/client-2.jpg" alt="Client Logo"/>
                    <img src="img/client-3.jpg" alt="Client Logo"/>
                    <img src="img/client-4.jpg" alt="Client Logo"/>
                    <img src="img/client-5.jpg" alt="Client Logo"/>
                    <img src="img/client-6.jpg" alt="Client Logo"/>
                    <img src="img/client-7.jpg" alt="Client Logo"/>
                    <img src="img/client-8.jpg" alt="Client Logo"/>
                </div>

            </div>
        </div>
        <Helmet>
            <script>
                {`
                  $(".clients-carousel").owlCarousel({
                    autoplay: true,
                    dots: true,
                    loop: true,
                    responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
                });
                    `}
            </script>
        </Helmet>
    </div>
  )
}
