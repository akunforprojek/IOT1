import { useEffect, useState } from "react";
const Navbar = () => {
    const [SM, setSM] = useState(window.innerWidth <= 991);

    useEffect(() => {
        const handleResize = () => {
            setSM(window.innerWidth <= 991);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="d-block text-light pt-0 pt-lg-5" style={{background:'#B5B2C2', minHeight: SM? 'max-content' : '100vh'}}>
            <div className="row pt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <p style={{fontSize:'30px',fontWeight:'700'}}>Monitor Website</p>
                    <div className="pt-0 pt-lg-5 d-flex" style={{fontSize:'20px',fontWeight:'700'}}>
                        <i class="fa-solid fa-house pt-1 me-3"></i>
                        <p >Dashboard</p>
                    </div>
                    <div className="pt-2 d-flex" style={{fontSize:'20px',fontWeight:'700'}}>
                        <i class="fa-solid fa-house pt-1 me-3"></i>
                        <p >Reporting</p>
                    </div>
                    <div className="pt-2 d-flex" style={{fontSize:'20px',fontWeight:'700'}}>
                        <i class="fa-solid fa-house pt-1 me-3" ></i>
                        <p >Setting</p>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </nav>
    );
}

export default Navbar;
