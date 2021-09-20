import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Camera } from 'react-feather';

export default function Menuitem({ data, subMenu }) {
    const [Expend, setExpend] = useState(false);

    return (
        <>
            {
                subMenu && subMenu.length > 0 ? (
                    <li onClick={() => setExpend(!Expend)} className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#" aria-expanded={Expend} aria-controls="form-elements">
                            <i className={data.icon} />
                            <span className="menu-title">{data.name}</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className={Expend ? "collapse show" : "collapse"} id="form-elements">
                            <ul className="nav flex-column sub-menu">
                                {
                                    subMenu.map((ele, ind) => (
                                        <li key={ind} className="nav-item"><Link onClick={data.onClick} className="nav-link" to={ele.to}>{ele.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                ) : (
                    <NavLink activeClassName="active" to={data.to} onClick={data.onClick} className="nav-item">
                        <a className="nav-link">
                            <i className={data.icon} />
                            <span className="menu-title">{data.name}</span>
                        </a>
                    </NavLink>
                )
            }
        </>
    )
}
