"use client";

import {
    List,
    Datagrid,
    EditButton,
    DeleteButton,
    TopToolbar,
    CreateButton,
    ExportButton,
    SearchInput,
    FilterButton,
    FunctionField,
} from "react-admin";

const speakerFilters = [
    <SearchInput source="q" alwaysOn key="q" />,
];

const SpeakerActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton label="Nouvel intervenant" />
        <ExportButton />
    </TopToolbar>
);

export const SpeakerList = () => (
    <List
        title="Intervenants"
        actions={<SpeakerActions />}
        filters={speakerFilters}
        sort={{ field: "lastName", order: "ASC" }}
    >
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <FunctionField
                label="Nom complet"
                render={(record: any) => `${record.firstName} ${record.lastName}`}
            />
            <FunctionField
                label="Biographie"
                render={(record: any) =>
                    record.biography ? record.biography.substring(0, 80) + (record.biography.length > 80 ? "…" : "") : "—"
                }
            />
            <EditButton label="Modifier" />
            <DeleteButton label="Supprimer" />
        </Datagrid>
    </List>
);
