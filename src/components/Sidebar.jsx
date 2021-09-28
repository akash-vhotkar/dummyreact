import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Menuitem from './Menuitem';
import { LOG_OUT } from '../store/constant';
import { withRouter } from 'react-router';


function Sidebar(props) {
  const { isNav } = useSelector(state => state.auth);
  const expand = useSelector(state => state.UserReducer.expand)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!expand) {
      switch (props.location.pathname) {
        case '/viewdonner':
        case '/donnerrevnue':
          dispatch({ type: 'SET_EXPAND', expand: 'Donors' })
          break;
        case '/viewhow':
        case '/addhow':
        case '/viewrevnue':
          dispatch({ type: 'SET_EXPAND', expand: 'Holy House' })
          break;
        case '/fullrevennue':
          dispatch({ type: 'SET_EXPAND', expand: 'Revenue Section' })
          break;
        case '/dashboard':
          dispatch({ type: 'SET_EXPAND', expand: 'Dashboard' })
        default:
          break;
      }
    }
  }, [props.location.pathname])

  const logout = () => {
    localStorage.removeItem('jwt');
    dispatch({ type: LOG_OUT });
  }

  const setExpand = (key) => {
    dispatch({ type: 'SET_EXPAND', expand: key })
  }

  const [menuData, setMenuData] = useState([
    { name: "Dashboard", to: "/dashboard", icon: "icon-grid menu-icon", subMenu: [] },
    // { name: "Changepassword", to: "/changepassword", icon: "icon-grid menu-icon", subMenu: [] },
    { name: "Holy House", to: "/#", icon: "icon-layout menu-icon", subMenu: [{ name: "All Holyhouse", to: "/viewhow" }, { name: "Add new", to: "/addhow" }, { name: "View Revnue", to: "/viewrevnue" }] },
    { name: "Donors", to: "/#", icon: "icon-columns menu-icon", subMenu: [{ name: "All Donors", to: "/viewdonner" }, { name: "Donors revennu", to: "/donnerrevnue" }] },
    { name: "Payment Setting", to: "/#", icon: "icon-bar-graph menu-icon", subMenu: [{ name: "Stripe", to: "/c" }, { name: "Pled", to: "/c" }] },
    { name: "Revenu Section", to: "/#", icon: "icon-grid-2 menu-icon", subMenu: [{ name: "Full Revenue", to: "/fullrevennue" }] },
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
                  setExpand={setExpand}
                  expand={expand}
                  subMenu={ele.subMenu}
                  location={props.location}
                />
              </>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default withRouter(Sidebar)