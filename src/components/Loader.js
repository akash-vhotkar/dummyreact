import React from 'react'
import gif from '../assets/images/loading.gif'

export default function Loader() {
    return (
        <div style={{textAlign:'center'}}>
            <img src={gif} alt="loader" srcset="" />
        </div>
    )
}
