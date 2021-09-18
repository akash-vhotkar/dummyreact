import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menuitem from './Menuitem';


export default function Sidebar() {
  const { isNav } = useSelector(state => state.auth);

  const [menuData, setMenuData] = useState([
    { name: "Dashboard", to: "/dashboard", icon: "icon-grid menu-icon", subMenu: [] },
    { name: "Changepassword", to: "/changepassword", icon: "icon-grid menu-icon", subMenu: [] },
    { name: "Holy House", to: "/content", icon: "icon-layout menu-icon", subMenu: [{ name: "All Holyhouse", to: "/c" }, { name: "Add new", to: "/c" }, { name: "View Revnue", to: "/c" }] },
    { name: "Donors", to: "/content", icon: "icon-columns menu-icon", subMenu: [{ name: "All Donors", to: "/c" }, { name: "Donors revennu", to: "/c" }] },
    { name: "Payment Setting", to: "/content", icon: "icon-bar-graph menu-icon", subMenu: [{ name: "Stripe", to: "/c" }, { name: "Pled", to: "/c" }] },
    { name: "Revenu Section", to: "/content", icon: "icon-grid-2 menu-icon", subMenu: [{ name: "Full Revenue", to: "/c" }] },

  ])

  return (
    <div>
      <nav className={isNav ? "sidebar sidebar-offcanvas active" : 'sidebar sidebar-offcanvas'} id="sidebar">
        <ul className="nav">

          {
            menuData.map((ele, ind) => (
              <>
                <Menuitem
                  key={ind}
                  data={ele}
                  subMenu={ele.subMenu}
                />
              </>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
