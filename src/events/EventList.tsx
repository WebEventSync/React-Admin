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
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="title" label="Titre" />
            <TextField source="place" label="Lieu" />
            <DateField source="startDate" label="Début" showTime={false} />
            <DateField source="endDate" label="Fin" showTime={false} />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);
