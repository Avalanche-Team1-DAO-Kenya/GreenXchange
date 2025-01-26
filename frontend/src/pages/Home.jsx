import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="#">GreenXchange</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to=".pages/Marketplace">MarketPlace</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./pages/Home.jsx">Join Waitlist</Link>
              </li>
              <Link to="./pages/Login.jsx" className="btn btn-brand ms-lg-3">Register</Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-uppercase text-white fw-semibold display-1">Welcome to GreenXchange</h1>
              <h5 className="text-white mt-3 mb-4">
                Your go-to marketplace for trading carbon credits on-chain!
              </h5>
              <div>
                <Link to="#waitlist" className="btn btn-brand me-2">Get Started</Link>
                <Link to="#about" className="btn btn-light ms-2">What we do</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-4 fw-semibold mt-3">About Us</h1>
              <div className="line">
                <p>We specialize in integrating blockchain technology with climate action, simplifying the carbon trading process with fast, easy, and secure transactions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <img src="./images/greenXchange.png" alt="GreenXchange" />
          </div>
          <div className="col-lg-5">
            <h1>What is GreenXchange?</h1>
            <p className="mt-3 mb-4">
              Promoting sustainability by tracking carbon credit trading for businesses. We enable businesses to buy, sell, and trade carbon credits on-chain. This app provides a seamless platform for managing carbon credits, promoting environmental sustainability, and supporting businesses in their carbon reduction efforts.
            </p>
            <div className="d-flex mt-4 pt-4 mb-3">
              <div className="iconbox me-4">
                <i className="ri-store-3-line"></i>
              </div>
              <div>
                <h5>Carbon Credit Marketplace</h5>
                <p>Buy, sell, and track your carbon credits with real-time data on prices, available credits, and transaction history.</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="iconbox me-4">
                <i className="ri-token-swap-fill"></i>
              </div>
              <div>
                <h5>Mint Carbon Credit Tokens</h5>
                <p>Create, manage, and track carbon credit tokens virtually.</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="iconbox me-4">
                <i className="ri-crosshair-2-fill"></i>
              </div>
              <div>
                <h5>Immutable Usage Tracking</h5>
                <p>Immutable transaction history for transparency and accountability.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="iconbox me-4">
                <i className="ri-eth-fill"></i>
              </div>
              <div>
                <h5>Crypto Payments</h5>
                <p>Buy carbon credits with cryptocurrency through MetaMask integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section id="waitlist" className="waitlist-container mt-4">
        <h1 className="display-4 fw-semibold text-center mt-4">Join Waitlist</h1>
        <p className="text-center mt-3 mb-4">Join our waitlist to be the first to know when we launch!</p>
        <h1 className="text-center">What's in it for you?</h1>
        <div className="myUL-container">
          <ul className="myUL">
            <li>Early Access: Be among the first to use the platform, giving you a head start in managing and trading carbon credits.</li>
            <li>Exclusive Updates: Receive the latest news and updates about the app's features and improvements.</li>
            <li>Priority Support: Get priority customer support to help you navigate the platform and resolve any issues quickly.</li>
            <li>Special Offers: Access to special promotions or discounts that may be available to early users.</li>
          </ul>
        </div>

        <div className="container waitlist-container1 mb-4">
          <form action="Submit">
            <div className="form-group">
              <label for="First_Name">First Name*</label>
              <input type="text" className="form-control" placeholder="Enter First Name" />
            </div>
            <div className="form-group">
              <label for="Last_Name">Last Name*</label>
              <input type="text" className="form-control" name="Last_Name" placeholder="Enter Last Name" />
            </div>
            <label for="Email">Email*</label>
            <input type="email" className="form-control" name="Email" placeholder="Enter Email Address" />
            <label for="Phone">Phone*</label>
            <input type="number" className="form-control" name="Phone" placeholder="+254*********" />
            <button type="submit" className="btn-brand mt-3 mb-4">SUBMIT</button>
          </form>
        </div>
      </section>

      {/* Team Section */}
      <section className="container text-center">
        <h1 className="display-4 fw-semibold text-center mt-4">Our Team</h1>
        <p>Our team thrives on collaboration and innovation. Regular meetings, code reviews, and agile methodologies ensure that everyone is aligned and working towards the common goal. With a shared passion for sustainability and technology, our developers are dedicated to making a positive impact through this groundbreaking project.</p>
        <div className="row">
          {/* Team members' cards */}
          <div className="col-md-4">
            <div className="card">
              <img src="./images/edwin_avalanche.jpg" className="card-img-top" alt="Team Member 1" />
              <div className="card-body">
                <h5 className="card-title">Edwin Waweru</h5>
                <p className="card-text">Back-end Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./images/esther_avalanche.jpg" className="card-img-top" alt="Team Member 2" />
              <div className="card-body">
                <h5 className="card-title">Esther Oyoo</h5>
                <p className="card-text">Front-end Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./images/yvonne_1.jpg" className="card-img-top" alt="Team Member 3" />
              <div className="card-body">
                <h5 className="card-title">Yvonne Samwel</h5>
                <p className="card-text">Full-stack developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./images/arnold_avalanche.jpg" className="card-img-top" alt="Team Member 1" />
              <div className="card-body">
                <h5 className="card-title">Anorld Akonga</h5>
                <p className="card-text">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>GreenXchange is a platform designed for sustainable carbon credit trading, powered by blockchain technology.</p>
            </div>
            <div className="col-lg-6 text-end">
              <p>Contact us: <i className="ri-mail-line"></i> greenxchangeofficial@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
