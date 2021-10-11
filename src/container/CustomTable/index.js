import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import _ from 'lodash';


class CustomTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { SearchBar } = Search;
        const customTotal = (from, to, size) => (
            <span style={{ marginLeft: '5px' }} className="react-bootstrap-table-pagination-total">
                Showing {from} to {to} of {size} Results
            </span>
        );

        const options = {
            paginationSize: 5,
            pageStartIndex: 1,
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [
                {
                    text: '10',
                    value: 10,
                },
                {
                    text: '25',
                    value: 25,
                },
                {
                    text: 'All',
                    value: this.props.tableData && this.props.tableData.length,
                },
            ],
        };
        return (
            <React.Fragment key={this.props.key || ''}>
                <ToolkitProvider
                    keyField="_id"
                    data={
                        this.props.tableData && this.props.tableData.length
                            ? this.props.tableData
                            : []
                    }
                    columns={this.props.columns}
                    search
                    exportCSV={{
                        fileName: this.props.exportFileName
                            ? `${this.props.exportFileName}.csv`
                            : 'custom.csv',
                    }}
                >
                    {props => {
                        return (
                            <div>
                                <div>
                                    {this.props.hideSearchbar ? null : (
                                        <SearchBar {...props.searchProps} />
                                    )}
                                </div>
                                <BootstrapTable
                                    striped
                                    hover
                                    defaultSorted={this.props.defaultSortedBy}
                                    rowStyle={this.props.rowStyle}
                                    condensed
                                    noDataIndication={this.props.noDataIndication}
                                    // pagination={paginationFactory(options)}
                                    // selectRow={this.props.selectRow || null}
                                    {...props.baseProps}
                                ></BootstrapTable>
                            </div>
                        );
                    }}
                </ToolkitProvider>
            </React.Fragment>
        );
    }
}

export default CustomTable;
