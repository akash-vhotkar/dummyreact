import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import Table from '../container/Table';
import face from '../assets/images/face1.jpg';
import { useDispatch } from 'react-redux';
import { ViewHow } from '../store/action/hollyhouse.action';
import moment from 'moment';

export default function Viewhow() {
    const [Data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        const data = await dispatch(ViewHow());
        console.log(data);
        setData(data);
    }, [])

    return (
        <React.Fragment>
            <Layout>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">View Organization list </h4>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Organization Logo
                                                </th>
                                                <th>
                                                    Organization name
                                                </th>

                                                <th>
                                                    Organization Email
                                                </th>
                                                <th>
                                                    Account Status
                                                </th>
                                                <th>
                                                    Amount Approved
                                                </th>
                                                <th>
                                                    Opening date
                                                </th>
                                                <th>
                                                    Action
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Data && Data.length > 0 && Data.map(ele => (
                                                    <tr>
                                                        <td className="py-1">
                                                            <img src={face} alt="ini" />
                                                        </td>
                                                        <td>
                                                            {ele.org_name}
                                                        </td>
                                                        <td>
                                                            {ele.admin_email}
                                                        </td>
                                                        <td>
                                                            {ele.isactive ? "Active" : "Deactive"}
                                                        </td>
                                                        <td>
                                                            {ele.status}
                                                        </td>
                                                        <td>
                                                            {
                                                                moment(ele.createdAt).fromNow()
                                                            }
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger btn-small">Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
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
