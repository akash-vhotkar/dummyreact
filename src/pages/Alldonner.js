import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import face from '../assets/images/face1.jpg';
import CustomTable from '../container/CustomTable';
import { getDonor, deleteDonor } from '../store/action/donor.action';
import { useDispatch } from 'react-redux';
import ConfirmationModal from '../container/ConfirmationModal/ConfirmationModal'

export default function Alldonner() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [currentRow, setCurrentRow] = useState({});

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
    },
    {
        dataField: 'action',
        isDummyField: true,
        text: 'Action',
        formatter: (cellContent, row) => {
            return (
                <button onClick={() => { setCurrentRow(row) }} className="btn btn-danger btn-small">Delete</button>
            );
        }
    }]
    const doneClickHandler = async () => {
        const data = await dispatch(deleteDonor(currentRow.id))
        if (data) {
            setCurrentRow({})
        }
    }
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
            {currentRow && currentRow.id ?
                <ConfirmationModal
                    open={true}
                    doneClick={doneClickHandler}
                    buttonText="Delete"
                    modalTitle={`Delete User`}
                    message={`Are you sure you want to delete ${currentRow.first_name} ${currentRow.last_name}?`}
                    handleClose={() => { setCurrentRow({}) }} /> : null
            }
        </React.Fragment>
    )
}
