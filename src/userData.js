import { imageUserUrl } from "./avatar";
export const userData = [
  {
    name: "Jan",
    activeUser: 4000,
  },
  {
    name: "Feb",
    activeUser: 3000,
  },
  {
    name: "March",
    activeUser: 2000,
  },
  {
    name: "April",
    activeUser: 2780,
  },
  {
    name: "May",
    activeUser: 1890,
  },
  {
    name: "June",
    activeUser: 2390,
  },
  {
    name: "July",
    activeUser: 3490,
  },
];

export const rows = [
  {
    id: 1,
    user: "Snow",
    imageUrl: imageUserUrl,
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$35",
  },
  {
    id: 2,
    user: "Lannister",
    imageUrl: imageUserUrl,
    email: "Cersei@gmail.com",
    status: "passive",
    transaction: "$35",
  },
  {
    id: 3,
    user: "Lannister",
    imageUrl: imageUserUrl,
    email: "Jaime@gmail.com",
    status: "active",
    transaction: "$35",
  },
  {
    id: 4,
    user: "Stark",
    imageUrl: imageUserUrl,
    email: "Arya@gmail.com",
    status: "passive",
    transaction: "$35",
  },
  {
    id: 5,
    user: "Targaryen",
    imageUrl: imageUserUrl,
    email: "Daenerys@gmail.com",
    status: "passive",
    transaction: null,
  },
  {
    id: 6,
    user: "Melisandre",
    imageUrl: imageUserUrl,
    email: null,
    status: "active",
    transaction: "$35",
  },
  {
    id: 7,
    user: "Clifford",
    imageUrl: imageUserUrl,
    email: "Ferrara@gmail.com",
    status: "active",
    transaction: 44,
  },
  {
    id: 8,
    user: "Frances",
    imageUrl: imageUserUrl,
    email: "Rossini@gmail.com",
    status: "passive",
    transaction: "$35",
  },
  {
    id: 9,
    user: "Roxie",
    imageUrl: imageUserUrl,
    email: "Harvey@gmail.com",
    status: "passive",
    transaction: "$35",
  },
];

function createData(imageUrl, name, date, amount, status) {
  return { imageUrl, name, date, amount, status };
}

export const rowsR = [
  createData(imageUserUrl, "Susan Carlson", "23May2021", 122, "Approved"),
  createData(imageUserUrl, "Susan Carlson", "23May2021", 122, "Pending"),
  createData(imageUserUrl, "Susan Carlson", "23May2021", 122, "Approved"),
  createData(imageUserUrl, "Susan Carlson", "23May2021", 122, "Declined"),
  createData(imageUserUrl, "Susan Carlson", "23May2021", 122, "Approved"),
];
