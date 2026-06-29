"use client";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

export const SpeakerCreate = () => (
    <Create title="Créer un intervenant" redirect="list">
        <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
            <TextInput
                source="firstName"
                label="Prénom"
                validate={required("Le prénom est obligatoire")}
                fullWidth
            />
            <TextInput
                source="lastName"
                label="Nom"
                validate={required("Le nom est obligatoire")}
                fullWidth
            />
            <TextInput
                source="photo"
                label="URL de la photo"
                fullWidth
            />
            <TextInput
                source="biography"
                label="Biographie"
                multiline
                rows={4}
                fullWidth
            />
        </SimpleForm>
    </Create>
);
