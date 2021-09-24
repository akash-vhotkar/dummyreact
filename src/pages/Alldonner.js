import React from 'react'
import Layout from '../container/Layout'
import Table from '../container/Table';
import face from '../assets/images/face1.jpg';

export default function Alldonner() {
    return (
        <React.Fragment>
            <Layout>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Org Sample Table list </h4>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    User
                                                </th>
                                                <th>
                                                    First name
                                                </th>
                                                <th>
                                                    Progress
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                                <th>
                                                    Deadline
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-1">
                                                    <img src={face} alt="ini" />
                                                </td>
                                                <td>
                                                    Herman Beck
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $ 77.99
                                                </td>
                                                <td>
                                                    May 15, 2015
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
