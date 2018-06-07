import React from 'react';
import './style.css';
import Navbar from './navbar';

const Carousel = () => (
    <div className="cover-wrapper">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <Navbar />
                <div className="carousel-item active">
                    <img src="http://gamerdevguild.com/wp-content/uploads/2015/12/clutch_image1.jpg" alt="First slide" />
                    <h2 className="hero">The Premier Colorado Gaming Experience</h2>
                </div>
                <div className="carousel-item">
                    <img src="https://img.grouponcdn.com/deal/qsNdwUzngKuYyZTSv74u/UN-960x576/v1/c700x420.jpg" alt="Second slide" />
                    <h2 className="hero">Social Gaming Leveled Up!</h2>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/LUEF6zvjHUA/maxresdefault.jpg" alt="Third slide" />
                    <h2 className="hero">Share Your Passion! Make New Friends Today!</h2>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Carousel;