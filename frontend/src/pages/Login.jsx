import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Form submitted:', { email, password });
      // Add login logic here (e.g., API call)
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section id="login-page" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-uppercase fw-semibold display-4">Welcome to GreenXchange</h4>
            <p className="mt-3 mb-4">Your go-to marketplace for trading carbon credits on chain!</p>
            <div className="login-container">
              <div className="login-card mt-4">
                <h1 className="display-5 fw-semibold">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 text-start">
                    <label htmlFor="email" className="h5">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3 text-start">
                    <label htmlFor="password" className="h5">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-brand mt-3">Login</button>
                  <p className="message mt-3">
                    Forgot your password? <span style={{ color: 'black' }}>Click here</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
