import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;