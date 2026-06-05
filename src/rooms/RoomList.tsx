"use client";

import {
    List,
    Datagrid,
    TextField,
    NumberField,
    TopToolbar,
    CreateButton,
    ExportButton,
    FilterButton,
    SearchInput,
    EditButton,
    DeleteButton
} from "react-admin";

const roomFilters = [
    <SearchInput source="q" alwaysOn key="q" />,
];

const RoomActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton label="Nouvel événement" />
        <ExportButton />
    </TopToolbar>
);

export const RoomList = () => (
    <List
        title="Salle"
        actions={<RoomActions />}
        filters={roomFilters}
        sort={{ field: "capacity", order: "DESC" }}
    >
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="name" label="Nom" />
            <NumberField source="capacity" label="Capacité"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);
