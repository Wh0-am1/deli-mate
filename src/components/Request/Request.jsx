import React from 'react';
import './Request.css'

function Request() {
  return (
    <section className="request">
        <div className="container">
            <div className="request-list">
                <h1>Deli-Mate</h1>
                <div className="license-id flex">
                    <label>License Id : </label>
                    <p>843948398493</p>
                </div>
                <div className="address">
                    <label>Address <p>:</p></label>
                    <p> Areekode , malappuram , kerala , </p>
                </div>
                <div className="pincode flex">
                    <label>Pincode : </label>
                    <p>673639</p>
                </div>
                <div className="mode flex">
                    <label>Request : </label>
                    <select>
                        <option value="">requested</option>
                        <option value="verified">verified</option>
                        <option value="rejected">rejected</option>
                    </select>
                </div>
                <button>submit</button>
            </div>
        </div>
    </section>
  )
}

export default Request