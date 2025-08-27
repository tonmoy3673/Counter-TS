import type React from "react";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import UserDetails from "../pages/UserDetails";

const Users: React.FC = () => {
  const { admin, buyer, seller } = useUserContext();
  const [user, setUser] = useState<string>("");
  const handleChangeUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setUser(value);
    if (value === "admin") {
      admin();
    } else if (value === "buyer") {
      buyer();
    } else if (value === "seller") {
      seller();
    }
  };
  return (
  
     <>
      <div className="text-center py-6 flex justify-center items-center gap-x-2">
        <p className="py-3">Select User Type : </p>
        <UserDropdown
          onChange={handleChangeUser}
          value={user}
          className="bg-gray-200 py-2 rounded-md px-3"
        >
          <option className="py-1" value="">
            Select User Type
          </option>
          <option className="py-1" value="admin">
            Admin
          </option>
          <option className="py-1" value="buyer">
            Buyer
          </option>
          <option className="py-1" value="seller">
            Seller
          </option>
        </UserDropdown>
      </div>
      <UserDetails/>
     </>
    
  );
};

export default Users;
