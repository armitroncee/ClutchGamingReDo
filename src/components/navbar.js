import React from 'react';
import './style.css';

class Navbar extends React.Component{
    state = {
        className: "navbar navbar-expand-lg sticky-top my-nav"
    }


    listenScrollEvent = e => {
        if (window.scrollY > 400) {
          this.setState({className: 'bg-dark navbar navbar-expand-lg sticky-top my-nav'})
        } else {
          this.setState({className: 'navbar navbar-expand-lg sticky-top my-nav'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }


    render() {
        return (
    <nav className={this.state.className} id="clutchnav">
    <a className="navbar-brand" href="#">Clutch</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#prices">Prices</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#events">Events</a>
                </li>
            </ul>
        </div>
    </nav>
        );
    };
};
        
export default Navbar;