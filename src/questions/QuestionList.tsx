"use client";

import {
    List,
    Datagrid,
    TextField,
    NumberField,
    TopToolbar,
    ExportButton,
    FilterButton,
    SearchInput,
    EditButton,
    DeleteButton,
    DateField,
    ReferenceField
} from "react-admin";

const Filters = [
    <SearchInput source="q" alwaysOn key="q" />,
];

const Actions = () => (
    <TopToolbar>
        <FilterButton />
        <ExportButton />
    </TopToolbar>
);

export const QuestionList = () => (
    <List
        title="Salle"
        actions={<Actions />}
        filters={Filters}
        sort={{ field: "capacity", order: "DESC" }}
    >
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="content" label="Contenu" />
            <TextField source="authorName" label="Auteur" />
            <NumberField source="upvotes" label="Capacité"/>
            <DateField source="createdAt" label="Date"/>
            <ReferenceField source="sessionId" reference="sessions" label="Session">
                <TextField source="title"/>
            </ReferenceField>
            <DeleteButton/>
        </Datagrid>
    </List>
);
