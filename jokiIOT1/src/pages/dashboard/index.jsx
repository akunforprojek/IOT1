import { Fragment } from 'react';
import RealTimeData from './session/realtimeData';
import SideBar from '../../shared/sideBar'
const Dashboard = () => {

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-2 p-0">
                        <SideBar />
                    </div>
                    <div className="col-12 col-lg-10 pt-5">
                        <div className="row pt-5">
                            <div className="col-0 col-lg-1"></div>
                            <div className="col-12 col-lg-10">
                                <p style={{ fontSize: '25px', fontWeight: '700' }}>Welcome to Dashboard!</p>
                                <RealTimeData />
                            </div>
                            <div className="col-0 col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;
