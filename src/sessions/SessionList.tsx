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
    ReferenceInput,
    SelectInput,
} from "react-admin";

const sessionFilters = [
    <SearchInput source="q" alwaysOn key="q" />,
    <ReferenceInput source="eventId" reference="events" label="Événement" key="eventId">
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

const SessionActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton label="Nouvelle session" />
        <ExportButton />
    </TopToolbar>
);

export const SessionList = () => (
    <List
        title="Sessions"
        actions={<SessionActions />}
        filters={sessionFilters}
        sort={{ field: "startTime", order: "ASC" }}
    >
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="title" label="Titre" />
            <TextField source="event.title" label="Événement" sortable={false} />
            <TextField source="room.name" label="Salle" sortable={false} />
            <DateField source="startTime" label="Début" showTime />
            <DateField source="endTime" label="Fin" showTime />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);
