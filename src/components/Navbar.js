import React, { useState } from 'react'
import HolyPennies from '../assets/images/HolyPennies-Logo.png';
import holyMini from '../assets/images/logo-mini.svg';
import face from '../assets/images/face1.jpg';
import LoadingBar from 'react-top-loading-bar'
import { useDispatch } from 'react-redux';
import { SWITCH_NAV } from '../store/constant';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [progress, setProgressBar] = useState(50);
  setTimeout(() => {
    setProgressBar(100)
  }, 500);
  const dispatch = useDispatch();

  const switchNav = () => {
    dispatch({ type: SWITCH_NAV })
  }
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
      />
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo mr-5" to="/dashboard"><img src={HolyPennies} className="mr-2" alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/dashboard"><img src={holyMini} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="icon-menu" />
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                  <span className="input-group-text" id="search">
                    <i className="icon-search" />
                  </span>
                </div>
                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown show">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/#" data-toggle="dropdown">
                <i className="icon-bell mx-0" />
                <span className="count" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="ti-info-alt mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="ti-settings mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a href="/#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="ti-user mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                <img src={face} alt="profile" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a href="/#" className="dropdown-item">
                  <i className="ti-settings text-primary" />
                  Settings
                </a>
                <a href="/#" className="dropdown-item">
                  <i className="ti-power-off text-primary" />
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-settings d-none d-lg-flex">
              <a href="/#" className="nav-link">
                <i className="icon-ellipsis" />
              </a>
            </li>
          </ul>
          <button onClick={switchNav} className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="icon-menu" />
          </button>
        </div>
      </nav>
    </>
  )
}
