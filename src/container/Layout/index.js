import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer';

export default function Layout(props) {
    return (
        <React.Fragment>
            <div>
                <div className="container-scroller">
                    {/* partial:partials/_navbar.html */}
                    <Navbar />
                    {/* partial */}
                    <div className="container-fluid page-body-wrapper">
                        {/* partial */}
                        {/* partial:partials/_sidebar.html */}
                        <Sidebar />
                        {/* partial */}
                        <div className="main-panel">
                            {
                                props.children
                            }
                            {/* partial:partials/_footer.html */}
                            <Footer />
                        </div>
                        {/* main-panel ends */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
