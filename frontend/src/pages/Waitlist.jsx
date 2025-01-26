import React from 'react';

const Waitlist = () => {
  return (
    <section id="waitlist-page" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-uppercase fw-bold">Join the Waitlist</h1>
            <p className="mt-4">Stay updated on the latest news and features of GreenXchange!</p>
            <form className="waitlist-form mt-4">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email to join the waitlist"
                required
              />
              <button type="submit" className="btn btn-brand mt-2">Join Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
