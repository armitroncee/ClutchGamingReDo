import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import "./style.css";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Carousel />
                <div className="location">
                    <i class="fas fa-map-marker-alt"> 3355 South Yarrow St. Unit E133 Lakewood, CO 80227</i><br />
                    <i class="fas fa-phone-square">  720-362-2101</i><br />
                    <i class="fas fa-clock"> Open Everyday: 12pm - 2am</i>
                </div>
                <div data-spy="scroll" data-target="#clutchnav" data-offset="0">
                    <section className="about" id="about">
                        <div className="section-title">
                            <h1>About Clutch</h1>
                        </div>
                        <p className="quote">Clutch is Denver's Mecca of gaming! Quit playing games at home alone and come throw down with gamers from across Colorado 7 days a week!</p>
                        <div className="img-container container">
                            <div className="row">
                                <img className="col-md-8 large col-sm-12" src="http://denver.carpediem.cd/data/afisha/o/fd/66/fd66d4f923.png" />
                                <div className="imgsmallcontainer col-md-4 col-sm-12">
                                    <img className="small col-sm-12" src="https://igx.4sqi.net/img/general/200x200/481922901_aOphT9CWMyL9rfdgvmIl_p-CTf3Qzb_FSJziHRuL0hM.jpg" />
                                    <p className="img-text">High End Gaming PCs</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="prices" id="prices">
                        <div className="section-title">
                            <h1>Prices</h1>
                        </div>
                        <div className="container time-container">
                            <h1>Hourly</h1>
                            <div className="row justify-content-between tc">
                                <div className="time col-2">1 Hour <br /><span>$4</span></div>
                                <div className="time col-2">3 Hours <br /><span>$10</span></div>
                                <div className="time col-2">5 Hours <br /><span>$15</span></div>
                                <div className="time col-2">10 Hours <br /><span>$20</span></div>
                            </div>
                        </div>
                        <div className="container time-container">
                            <h1>Membership</h1>
                            <div className="row justify-content-between tc">
                                <div className="time col-4">Registration <br /><span>$20</span></div>
                                <div className="time col-4">Monthly <br /><span>$55</span></div>
                            </div>
                        </div>
                    </section>
                    <section className="events" id="events">
                        <div className="section-title">
                            <h1>Events</h1>
                        </div>
                    </section>
                    <div className="event-container">
                        <div className="event-info">
                            <img src="https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/sh-overview.jpg" />
                            <h5>Call of Duty WW2 Tournament</h5>
                            <h6>Event Details</h6>
                            <p>This is a *BRING YOUR OWN CONSOLE* PS4 event. Monitors will be provided. Things to bring: Ethernet cable, HDMI cable, headphones, controller, console
                                ***Absolutely no outside food and drink is allowed in the facility - WATER BOTTLES OK***
                                *Prize pool $15+ Per entered person
                                *Entry is $30 per person - Not due until the day of the event
                                *Max Capacity of teams - 6 +1 Sub (must have purchased entry to compete)
                                *Event live stream - twitch.tv/clutchgg01 -02 -03*
                                Event in-game rules *TBD
                            </p>
                        </div>
                        <div className="event-info">
                            <img src="https://static.makeuseof.com/wp-content/uploads/2017/10/whats-league-legends-670x335.jpg" />
                            <h5>League of Legends 1 v 1 Me Bro</h5>
                            <h6>Event Details</h6>
                            <p>This is an instore LAN  event. Computers and monitors will be provided.
                                Things to bring: Headphones, Keyboards, and Mice if you prefer your own
                                ***Absolutely no outside food and drink is allowed in the facility - WATER BOTTLES OK***
                                Come join the 1v1 me bro action in this exciting 20 person double elimination mirror match tournament! It will be a traditional 1v1 howling abyss, first to 100cs, 1st kill, first tower, best of 3 double elimination match! Each round of this event will be a random free week champion making it a truly wild RNG tournament!
                                Reserve a spot for$1 dollar, includes 1 practice round before the tournament begins.
                                Winners receive the following awesome prizes along with their photo on the website:
                                1st Place $60 cash prize
                                2nd Place $30 cash prize
                                3rd place $10 cash prize
                            
                        </p>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home;