import React from "react";
import "./WidgetLf.css";
import WidgetUser from "./WidgetUser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const WidgetLf = () => {
  const imageUserUrl =
    "https://images.unsplash.com/photo-1464863979621-258859e62245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80";
  return (
    <div className="widgetLf">
      <Card>
        <CardContent>
          <h3 className="widgetLf__title">New Join Members</h3>
          <WidgetUser
            imageUrl={imageUserUrl}
            username="Anna Keller"
            userTitle="Software Engenner"
          />
          <WidgetUser
            imageUrl={imageUserUrl}
            username="Anna Keller"
            userTitle="Software Engenner"
          />
          <WidgetUser
            imageUrl={imageUserUrl}
            username="Anna Keller"
            userTitle="Software Engenner"
          />
          <WidgetUser
            imageUrl={imageUserUrl}
            username="Anna Keller"
            userTitle="Software Engenner"
          />
          <WidgetUser
            imageUrl={imageUserUrl}
            username="Anna Keller"
            userTitle="Software Engenner"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default WidgetLf;
