"use client";

import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    TopToolbar,
    CreateButton,
    ExportButton,
    FilterButton,
    SearchInput,
} from "react-admin";

const eventFilters = [
    <SearchInput source="q" alwaysOn key="q" />,
];

const EventActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton label="Nouvel événement" />
        <ExportButton />
    </TopToolbar>
);

export const EventList = () => (
    <List
        title="Événements"
        actions={<EventActions />}
        filters={eventFilters}
        sort={{ field: "startDate", order: "DESC" }}
    >
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
        }} rowClick="edit" bulkActionButtons={false}>
            <TextField source="title" label="Titre" />
            <TextField source="place" label="Lieu" />
            <DateField source="startDate" label="Début" showTime={false} />
            <DateField source="endDate" label="Fin" showTime={false} />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);
