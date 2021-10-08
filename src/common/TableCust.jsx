import React, { useState } from "react";
import "./TableCust.css";
import { DataGrid } from "@mui/x-data-grid";
import { useHistory, useLocation } from "react-router";
import WidgetUser from "../components/widgetLeft/WidgetUser";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const TableCust = ({ fields, rows }) => {
  const [data, setData] = useState(rows);
  const history = useHistory();
  const location = useLocation();

  const handelDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };
  const handelNavigation = (id) => {
    if (location.pathname.includes("users")) {
      history.push(`user/${id}`);
    } else {
      history.push(`product/${id}`);
    }
  };
  const columns = [
    {
      field: fields.id,
      headerName: fields.id.toUpperCase(),
      width: 70,
    },
    {
      field: fields.fieldOne,
      headerName: fields.fieldOne,
      width: 180,
      renderCell: (params) => {
        return (
          <WidgetUser
            imageUrl={params.row.imageUrl}
            username={params.row.product}
            right
          />
        );
      },
    },
    {
      field: fields.fieldTwo,
      headerName: fields.fieldTwo,
      width: 180,
    },
    {
      field: fields.fieldThree,
      headerName: fields.fieldThree,
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userList__statusContainer">
            <span
              className={`userList__status ${
                params.row.status === "active"
                  ? "userList__statusA"
                  : "userList__statusP"
              }`}
            >
              {params.row.status}
            </span>
          </div>
        );
      },
    },
    {
      field: fields.fieldFour,
      headerName: fields.fieldFour,
      width: 170,
    },
    {
      field: fields.fieldFive,
      headerName: fields.fieldFive,
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              aria-label="edit"
              onClick={() => handelNavigation(params.row.id)}
            >
              <EditIcon className="userList__edit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => handelDelete(params.row.id)}
            >
              <DeleteIcon className="userList__delete" />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <div className="tableCust">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default TableCust;
