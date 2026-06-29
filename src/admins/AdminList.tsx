import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const AdminList = () => (
  <List>
    <Datagrid sx={{
            background: "#141d38",
            borderRadius: 4,

            "& .RaDatagrid-headerCell": {
                background: "#11172f",
                color: "#19d3ff",
                fontWeight: "bold",
            },

            "& .RaDatagrid-row:hover": {
                background: "#1c2550",
            },
        }} rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nom" />
      <EmailField source="email" label="Email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);