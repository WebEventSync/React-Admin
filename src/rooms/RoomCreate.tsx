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
        <SimpleForm>
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