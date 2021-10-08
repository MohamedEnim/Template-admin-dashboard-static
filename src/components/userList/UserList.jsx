import React from "react";
import "./UserList.css";
import { rows } from "../../userData";
import TableCust from "../../common/TableCust";

const UserList = () => {
  const fields = {
    id: "id",
    fieldOne: "user",
    fieldTwo: "email",
    fieldThree: "status",
    fieldFour: "transaction",
    fieldFive: "action",
  };

  return (
    <div className="userList" style={{ width: "100%" }}>
      <TableCust fields={fields} rows={rows} />
    </div>
  );
};

export default UserList;
