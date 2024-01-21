import { Link } from "react-router-dom";
function AuthBtns() {
    return (
        <div className="flex items-center">
           <Link className="bg-lime-500 p-2 text-xs md:text-sm   rounded-lg mr-2" to='/login'>Login</Link> 
           <Link className="bg-rose-500 p-2 text-xs md:text-sm  rounded-lg mr-2" to='/register'>Register</Link> 
        </div>
    );
}

export default AuthBtns;