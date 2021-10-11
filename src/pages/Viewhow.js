import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import Table from '../container/Table';
import face from '../assets/images/face1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { ViewHow, deleteOrg } from '../store/action/hollyhouse.action';
import moment from 'moment';
import CustomTable from '../container/CustomTable';
import ConfirmationModal from '../container/ConfirmationModal/ConfirmationModal'
import CustomPagination from '../components/CustomPagination/CustomPagination';

export default function Viewhow() {
    const [Data, setData] = useState({});
    const [currentRow, setCurrentRow] = useState({});
    const [page, setPage] = useState(1);
    const loader = useSelector(state => state.HollyHouseReducer.loader)
    const dispatch = useDispatch();

    useEffect(async () => {
        const data = await dispatch(ViewHow(1));
        setData(data);
    }, [])

    let columns = [{
        dataField: 'name',
        text: 'Name',
        searchable: true,
        formatter: (cellContent, row) => {
            return (
                <div className="table-action">
                    <img style={{ marginRight: '5px' }} src={face} alt="ini" />{row.name}
                </div>
            )
        }
    }, {
        dataField: 'email',
        text: 'Email',
        searchable: true
    }, {
        dataField: 'status',
        text: 'Acc Status',
        searchable: true,
        formatter: (cellContent, row) => {
            return (row.isactive ? "Active" : "Deactive")
        }
    }, {
        dataField: 'amount',
        text: 'Amount Approved',
        searchable: true,
        formatter: (cellContent, row) => {
            return row.status
        }
    }, {
        dataField: 'date',
        text: 'Opening Date',
        searchable: true,
        formatter: (cellContent, row) => {
            return moment(row.createdAt).fromNow()
        }
    }, {
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
        const data = await dispatch(deleteOrg(currentRow.id))
        if (data) {
            setCurrentRow({})
        }
    }

    const paginationHandler = async (page) => {
        const data = await dispatch(ViewHow(page));
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
                                    <h4 className="card-title">View Organization list </h4>
                                    {(Data && Data.rows && Data.rows.length) ?
                                        <>
                                            <CustomTable
                                                columns={columns}
                                                noDataIndication='No data found'
                                                tableData={Data.rows}
                                                loader={loader}
                                            />
                                            <CustomPagination
                                                totalCount={Data.count}
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
                    buttonText="delete"
                    doneClick={doneClickHandler}
                    modalTitle={`Delete Organization`}
                    message={`Are you sure you want to delete ${currentRow.org_name}?`}
                    handleClose={() => { setCurrentRow({}) }} /> : null
            }
        </React.Fragment>
    )
}
