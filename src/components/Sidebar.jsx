import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="dashboard.html">
                    <i className="icon-grid menu-icon" />
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="icon-layout menu-icon" />
                    <span className="menu-title">Holy Houses</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="all-org.html">All Holyhouse</a></li>
                      <li className="nav-item"> <a className="nav-link" href="add-org-new.html">Add new</a></li>
                      <li className="nav-item"> <a className="nav-link" href="org-rev.html">View Revenue</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                    <i className="icon-columns menu-icon" />
                    <span className="menu-title">Donors</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">All Donors</a></li>
                      <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Donors Revenue</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                    <i className="icon-bar-graph menu-icon" />
                    <span className="menu-title">Payment Settings</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">Stripe</a></li>
                      <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">Pled</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                    <i className="icon-grid-2 menu-icon" />
                    <span className="menu-title">Revenue Section</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Full Revenue</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
        </div>
    )
}
