import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = {'loggedInUserIndex': false}
    return(
        auth.loggedInUserIndex ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes;

