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
    DeleteButton,
    DateField,
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
        title="Questions"
        actions={<Actions />}
        filters={Filters}
        sort={{ field: "createdAt", order: "DESC" }}
    >
        <Datagrid bulkActionButtons={false}>
            <TextField source="content" label="Contenu" />
            <TextField source="authorName" label="Auteur" />
            <NumberField source="upvotes" label="Votes" />
            <DateField source="createdAt" label="Date" />
            <TextField source="session.title" label="Session" />
            <TextField source="session.event.title" label="Événement" />
            <DeleteButton />
        </Datagrid>
    </List>
);
