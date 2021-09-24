import React, { useState } from 'react'

export default function Table(props) {

    return (
        <React.Fragment>
            <div className="table-responsive">
                <table className="table table-striped">
                    {
                        props.children
                    }
                </table>
            </div>
        </React.Fragment>
    )
}
