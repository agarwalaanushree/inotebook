import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <h1 className="text-center mb-4">About iNotebook</h1>
              <p className="lead">
                iNotebook is a user-friendly and secure platform designed to
                help you manage your notes efficiently. Whether you're jotting
                down ideas, planning your day, or keeping track of important
                information, iNotebook provides the tools you need.
              </p>
              <p>
                With iNotebook, you can easily create, edit, and delete your
                notes at any time. Our platform ensures that your notes are
                always available, whether you're at home, at work, or on the go.
                Plus, your data is protected with robust security measures, so
                you can focus on what matters most.
              </p>
              <h3 className="mt-4">Key Features</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Easy Note Management:</strong> Create, edit, and
                  delete your notes with just a few clicks.
                </li>
                <li className="list-group-item">
                  <strong>Secure Access:</strong> Sign up or log in with
                  confidence knowing your notes are secure.
                </li>
                <li className="list-group-item">
                  <strong>Responsive Design:</strong> Access your notes on any
                  device, anytime, anywhere.
                </li>
                <li className="list-group-item">
                  <strong>Custom Tags:</strong> Organize your notes with tags
                  for easy searching and filtering.
                </li>
              </ul>
              <div className="text-center mt-4">
                <Link to="/signup" className="btn btn-primary mx-2">
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-outline-primary mx-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
