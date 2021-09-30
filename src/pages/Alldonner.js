import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import face from '../assets/images/face1.jpg';
import CustomTable from '../container/CustomTable';
import { getDonor } from '../store/action/donor.action';
import { useDispatch } from 'react-redux';

export default function Alldonner() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        const data = await dispatch(getDonor());
        setData(data);
    }, [])

    let columns = [{
        dataField: 'image',
        text: 'User',
        formatter: (cellContent, row) => {
            return (
                <img src={row.image} alt="ini" />
            )
        }
    }, {
        dataField: 'first_name',
        text: 'First Name'
    }, {
        dataField: 'last_name',
        text: 'Last Name'
    }, {
        dataField: 'email',
        text: 'Email',
        headerStyle: (colum, colIndex) => {
            return { width: "250px", textAlign: "left" };
        },
        formatter: (cellContent, row) => {
            return (
                <div className="table-action">{row.email}</div>
            )
        }
    }, {
        dataField: 'mobile',
        text: 'Contact Number'
    }, {
        dataField: 'isactive',
        text: 'Active'
    }]
    return (
        <React.Fragment>
            <Layout>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">View Donner </h4>
                                    {data && data.length ? <CustomTable
                                        columns={columns}
                                        noDataIndication='No data found'
                                        tableData={data}
                                    /> : "Loading..."}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
