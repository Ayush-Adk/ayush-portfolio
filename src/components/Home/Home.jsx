import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Typewriter from "typewriter-effect";
import home_img from '../../assets/banner_top_image.png';
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="home">
        <p>
          Hello ! <span>👋</span>
        </p>
        <h1>
          Myself <span>Ayush Adhikari</span>
        </h1>
        <div className="typewriter">
          <Typewriter
            options={{
              loop: true,
              cursor:
                '<span style="color:rgb(255,200,61); font-size:35px; font-weight:bold; ">|</span>',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<span style='color: rgb(255,200,61); font-size:35px; margin-top:20px;'><strong>Website Developer...</strong></span>"
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: rgb(255,200,61); font-size:35px"><strong>Freelancer...</strong></span>'
                )
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
           <div className="icons">
              <ul>
                <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
                <li><a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook}  /></a></li>
                <li><a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
                <li><a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
              </ul>
            </div>
        </div>
      </div>
      <div className="home-img">
            <img src={home_img} alt=""/>
      </div>
    </div>
  );
};
export default Home; 
