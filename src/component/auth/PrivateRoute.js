import { Navigate } from "react-router-dom";

function PrivateRoute(props){
    if(!props.user){
        return <Navigate to='/login' />
    }
    console.log(props.children)
    return props.children
}

export default PrivateRoute;