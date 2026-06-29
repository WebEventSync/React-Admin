"use client";

import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    useRecordContext,
    NumberInput,
} from "react-admin";

const RoomTitle = () => {
    const record = useRecordContext();
    return <span>Salle : {record?.name}</span>;
};

export const RoomEdit = () => (
    <Edit title={<RoomTitle />} redirect="list">
        <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
            <TextInput
                source="name"
                label="Nom"
                validate={[required("Nom obligatoire")]}
            />
            <NumberInput
                source="capacity"
                label="Capacité"
            />
        </SimpleForm>
    </Edit>
);