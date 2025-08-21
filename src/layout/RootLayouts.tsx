import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";


const RootLayouts : React.FC = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default RootLayouts;