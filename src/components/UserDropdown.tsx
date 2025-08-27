import React, { type ReactNode } from "react";

interface UserDropdownData {
  value: string;
  className?: string;
  onChange?: (e:React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

const UserDropdown: React.FC<UserDropdownData> = ({
  children,
  className,
  value,
  onChange,
}) => {
  return (
    <>
      <select className={`${className}`} value={value} onChange={onChange}>
         {children}
      </select>
    </>
  );
};

export default UserDropdown;
