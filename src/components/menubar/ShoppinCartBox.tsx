import { FaCartShopping } from "react-icons/fa6";
function ShoppinCartBox() {
    return (
        <div className="flex items-center justify-center  bg-blue-500 text-xs cursor-pointer select-none md:py-2 p-1 rounded-lg">
            Shopping Cart
            <FaCartShopping className="mx-1" />
        </div>
    );
}

export default ShoppinCartBox;