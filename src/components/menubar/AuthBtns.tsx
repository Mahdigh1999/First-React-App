import { Link } from "react-router-dom";
function AuthBtns() {
    return (
        <div>
           <Link className="bg-lime-500 p-2 rounded-lg mr-2" to='/login'>Login</Link> 
           <Link className="bg-rose-500 p-2 rounded-lg mr-2" to='/register'>Register</Link> 
        </div>
    );
}

export default AuthBtns;