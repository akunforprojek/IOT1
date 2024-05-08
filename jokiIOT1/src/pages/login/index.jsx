import { Fragment} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <Fragment>
            <h1>INI LOGIN</h1>
            <Link to="/dashboard">
                <button className='btn btn-seccondary'>direct link</button>
            </Link>
        </Fragment>
    );
}

export default Login;
