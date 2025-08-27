import type React from "react";
import UserDropdown from "./UserDropdown";

const Users :React.FC = () => {
    return (
        <div>
            <p>Select User Type : </p>
            <UserDropdown/>
        </div>
    );
};

export default Users;