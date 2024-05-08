import { Fragment} from 'react';

const RealTimeData = () => {


    return (
        <Fragment>
            <div className="row">
                <div className="col-6 col-md-3" style={{ fontSize: '15px' }}>
                    <div className="d-flex">
                        <i class="fa-solid fa-temperature-three-quarters pt-1 me-3"></i>
                        <p>Temperature</p>
                    </div>
                    <div style={{width:'100%',height:'170px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
                <div className="col-6 col-md-3" style={{ fontSize: '15px' }}>
                    <div className="d-flex">
                        <i class="fa-solid fa-temperature-three-quarters pt-1 me-3"></i>
                        <p>Moisture</p>
                    </div>
                    <div style={{width:'100%',height:'170px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
                <div className="col-6 col-md-3" style={{ fontSize: '15px' }}>
                    <div className="d-flex">
                        <i class="fa-solid fa-temperature-three-quarters pt-1 me-3"></i>
                        <p>Wind speed</p>
                    </div>
                    <div style={{width:'100%',height:'170px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
                <div className="col-6 col-md-3" style={{ fontSize: '15px' }}>
                    <div className="d-flex">
                        <i class="fa-solid fa-temperature-three-quarters pt-1 me-3"></i>
                        <p>Water Level</p>
                    </div>
                    <div style={{width:'100%',height:'170px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-md-9">
                    <div style={{width:'100%',height:'400px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
                <div className="col-12 col-md-3">
                    <div style={{width:'100%',height:'400px', background:'#D9D9D9', borderRadius:'1vw'}}></div>
                </div>
            </div>
        </Fragment>
    );
}

export default RealTimeData;
