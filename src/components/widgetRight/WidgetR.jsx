import React from "react";
import "./WidgetR.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import WidgetUser from "../widgetLeft/WidgetUser";
import Button from "@mui/material/Button";

import { rowsR } from "../../userData";

const WidgetR = () => {
  return (
    <div className="widgetR">
      <Card>
        <CardContent>
          <h3 className="widgetR__title">Latest Transactions</h3>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="widgetR__tableCell">Customer</TableCell>
                  <TableCell className="widgetR__tableCell">Date</TableCell>
                  <TableCell className="widgetR__tableCell">Amount</TableCell>
                  <TableCell className="widgetR__tableCell">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsR.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="widgetR__tableRow"
                  >
                    <TableCell component="th" scope="row">
                      <WidgetUser
                        imageUrl={row.imageUrl}
                        username={row.name}
                        right
                      />
                    </TableCell>

                    <TableCell className="widgetR__tableCellB">
                      {row.date}
                    </TableCell>
                    <TableCell className="widgetR__tableCellB">
                      {row.amount}
                    </TableCell>
                    <TableCell className="widgetR__tableCellB">
                      <Button
                        variant="text"
                        className={`widgetR__tableBn ${
                          (row.status === "Approved" &&
                            "widgetR__tableBnApprov") ||
                          (row.status === "Declined" &&
                            "widgetR__tableBnDeclin") ||
                          (row.status === "Pending" && "widgetR__tableBnPend")
                        }`}
                      >
                        {row.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WidgetR;
