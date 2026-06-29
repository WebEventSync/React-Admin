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
    ArrayField,
    SingleFieldList,
    FunctionField,
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
            <TextField source="event.title" label="Événement" sortable={false} />
            <TextField source="room.name" label="Salle" sortable={false} />
            <DateField source="startTime" label="Début" showTime />
            <DateField source="endTime" label="Fin" showTime />
            <ArrayField source="speakers" label="Intervenant(s)">
                <SingleFieldList>
                    <FunctionField
                        render={(record) => `${record.speaker.firstName} ${record.speaker.lastName}`}
                    />
                </SingleFieldList>
            </ArrayField>
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);
