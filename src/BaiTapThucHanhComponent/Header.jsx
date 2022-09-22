//rcc
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="mb-5 pb-5">
        <nav className="navbar text-white bg-dark">
          <div className="container">
            <a className="navbar-brand">Start Bootstrap</a>
            <form className="" role="search">
              <nav>
                <a className=" text-white p-2" href="">
                  Home
                </a>
                <a className=" text-white p-2" href="">
                  About
                </a>
                <a className=" text-white p-2" href="">
                  Contact
                </a>
              </nav>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
