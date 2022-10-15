import React from 'react'

export default function TeamMembers(props) {
    props.changeTitle("team");

  return (
    <div>
       <div class="team mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Meet our team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet 
                    </p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-sm-6 team-item">
                        <div class="team-img">
                            <img src="img/team-1.jpg" class="img-fluid" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="ion-logo-twitter"></i></a>
                                <a href="#"><i class="ion-logo-facebook"></i></a>
                                <a href="#"><i class="ion-logo-linkedin"></i></a>
                                <a href="#"><i class="ion-logo-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>John P. Haight</h3>
                            <p>Web Designer</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 team-item">
                        <div class="team-img">
                            <img src="img/team-2.jpg" class="img-fluid" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="ion-logo-twitter"></i></a>
                                <a href="#"><i class="ion-logo-facebook"></i></a>
                                <a href="#"><i class="ion-logo-linkedin"></i></a>
                                <a href="#"><i class="ion-logo-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>David R. Bernard</h3>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 team-item">
                        <div class="team-img">
                            <img src="img/team-3.jpg" class="img-fluid" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="ion-logo-twitter"></i></a>
                                <a href="#"><i class="ion-logo-facebook"></i></a>
                                <a href="#"><i class="ion-logo-linkedin"></i></a>
                                <a href="#"><i class="ion-logo-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Dana A. Thomas</h3>
                            <p>Apps Developer</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 team-item">
                        <div class="team-img">
                            <img src="img/team-4.jpg" class="img-fluid" alt="Team Member"/>
                            <div class="team-social">
                                <a href="#"><i class="ion-logo-twitter"></i></a>
                                <a href="#"><i class="ion-logo-facebook"></i></a>
                                <a href="#"><i class="ion-logo-linkedin"></i></a>
                                <a href="#"><i class="ion-logo-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-info">
                            <h3>Ava M. Proctor</h3>
                            <p>Apps Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
