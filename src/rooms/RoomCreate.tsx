"use client";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput,
} from "react-admin";

export const RoomCreate = () => (
    <Create redirect="list">
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
    </Create>
);