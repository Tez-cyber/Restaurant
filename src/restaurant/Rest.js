import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar';
import Stat from './stat'
import Table from './table'

const Rest = () => {

    return(
        <>
            <Sidebar />
            <div className="ml">
                <Navbar />
                <div className="shift">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Dashboard</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-3 pop-note">
                            <span>Filter Period</span>
                            <p className="note">01 Jan 2021 - 21 jan 2021</p>
                        </div>
                    </div>
                    <div className="row">
                        {Stat.map((s, i) => 
                            <div className="col-md-4">
                                <div className="bg">
                                    <p className="p">{s.name}</p>
                                    <div className="display">
                                        <span>{s.number}</span>
                                        <small>{s.rate}</small>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Order Summary</h5>
                                        <small>Lorem ipsum dolor sit amet</small>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="bg-2">
                                            <small className="span">Monthly</small>
                                            <small className="span">Weekly</small>
                                            <small className="span">Today</small>
                                        </div>
                                    </div>
                                </div>
                                <Table />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Revenue</h5>
                                        <small>Lorem ipsum dolor sit amet</small>
                                    </div>
                                    <div className="col-md-6">
                                        <form>
                                            <select className="bg-2">
                                                <option>Monthly</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-6">
                                        <div className="show">
                                            <span></span>
                                            <span>Income</span>
                                            <span></span>
                                            <span>Expenses</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="show-2 push-s">
                                            <span></span>
                                            <span></span>
                                            <span>N 450K</span>
                                            <span></span>
                                            <span></span>
                                            <span>N 450K</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </>
    )
}
export default Rest