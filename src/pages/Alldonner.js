import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import face from '../assets/images/face1.jpg';
import CustomTable from '../container/CustomTable';
import { getDonor, deleteDonor } from '../store/action/donor.action';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmationModal from '../container/ConfirmationModal/ConfirmationModal'
import CustomPagination from '../components/CustomPagination/CustomPagination';

export default function Alldonner() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [currentRow, setCurrentRow] = useState({});
    const [page, setPage] = useState(1);
    const loader = useSelector(state => state.DonorReducer.loader)

    useEffect(async () => {
        const data = await dispatch(getDonor(1));
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
    const paginationHandler = async (page) => {
        const data = await dispatch(getDonor(page));
        setData(data);
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
                                    {data && data.rows && data.rows.length ?
                                        <>
                                            <CustomTable
                                                columns={columns}
                                                noDataIndication='No data found'
                                                tableData={data.rows}
                                            />
                                            <CustomPagination
                                                totalCount={data.count}
                                                page={page}
                                                setPage={setPage}
                                                loader={loader}
                                                paginationHandler={paginationHandler}
                                            />
                                        </>
                                        : "Loading..."}
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
