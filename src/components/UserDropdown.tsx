import React, { type ReactNode } from "react";

interface UserDropdownData {
  title: string;
  className?: string;
  onChange?: () => void;
  children: ReactNode;
}

const UserDropdown: React.FC<UserDropdownData> = ({
  children,
  className,
  title,
  onChange,
}) => {
  return (
    <>
      <select className={`${className}`}>
        <option className={`${className}`} onChange={onChange} title={title}>
          {children}
        </option>
      </select>
    </>
  );
};

export default UserDropdown;
