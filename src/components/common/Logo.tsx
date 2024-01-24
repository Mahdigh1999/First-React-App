import logo from "../../assets/logo.png"
type Props = { 
    className?:string;
    logoClassName?:string;
}
function Logo({className , logoClassName}:Props) {
    return (
        <div className={className ? className : ""}>
            <img src={logo} alt=""  className={logoClassName? logoClassName : " h-8 "}/>
        </div>
    );
}

export default Logo;