import React from 'react'
import Layout from '../container/Layout'
import face from '../assets/images/face1.jpg';
import CustomTable from '../container/CustomTable';

export default function Alldonner() {
    let columns = [{
        dataField: 'user',
        text: 'User',
        formatter: () => {
            return (
                <img src={face} alt="ini" />
            )
        }
    }, {
        dataField: 'name',
        text: 'Name'
    }, {
        dataField: 'progress',
        text: 'Progress',
        formatter: () => {
            return (
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
            )
        }
    }, {
        dataField: 'amount',
        text: 'amount'
    }, {
        dataField: 'deadline',
        text: 'Deadline'
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
                                    <CustomTable
                                        columns={columns}
                                        noDataIndication='No data found'
                                        tableData={[{
                                            name: 'Herman Beck',
                                            amount: ' $ 77.99',
                                            deadline: ' May 15, 2015    '
                                        }]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
