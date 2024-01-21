import { Link } from "react-router-dom";


const Breadcrumb2D3D = () => {
    
    return (
        <div className="z-0 ml-8 rounded-lg border border-lime-500 w-[fit-content] flex items-center select-none">
        <Link className="px-5 py-2 block" to = "/2D-3DGames/2D">2D</Link>
        /
        <Link className="px-5 py-2 block" to = "/2D-3DGames/3D">3D</Link>


        </div>
    );
};

export default Breadcrumb2D3D;