import { FaCartShopping } from "react-icons/fa6";
function ShoppinCartBox() {
    return (
        <div className="flex items-center justify-center space-x-3 bg-blue-500 text-xs cursor-pointer select-none p-1 rounded-lg">
            Shopping Cart
            <FaCartShopping />
        </div>
    );
}

export default ShoppinCartBox;