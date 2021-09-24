import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Menuitem from './Menuitem';
import { LOG_OUT } from '../store/constant';


export default function Sidebar() {
  const { isNav } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('jwt');
    dispatch({ type: LOG_OUT });
  }

  const [menuData, setMenuData] = useState([
    { name: "Dashboard", to: "/dashboard", icon: "icon-grid menu-icon", subMenu: [] },
    // { name: "Changepassword", to: "/changepassword", icon: "icon-grid menu-icon", subMenu: [] },
    { name: "Holy House", to: "/content", icon: "icon-layout menu-icon", subMenu: [{ name: "All Holyhouse", to: "/viewhow" }, { name: "Add new", to: "/addhow" }, { name: "View Revnue", to: "/viewrevnue" }] },
    { name: "Donors", to: "/content", icon: "icon-columns menu-icon", subMenu: [{ name: "All Donors", to: "/viewdonner" }, { name: "Donors revennu", to: "/c" }] },
    { name: "Payment Setting", to: "/content", icon: "icon-bar-graph menu-icon", subMenu: [{ name: "Stripe", to: "/c" }, { name: "Pled", to: "/c" }] },
    { name: "Revenu Section", to: "/content", icon: "icon-grid-2 menu-icon", subMenu: [{ name: "Full Revenue", to: "/c" }] },
    { name: "Logout", to: "void(0)", onClick: logout, icon: "icon-grid-2 menu-icon", subMenu: [] },
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
