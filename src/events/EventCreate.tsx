"use client";

import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    required,
    minLength,
} from "react-admin";

export const EventCreate = () => (
    <Create title="Créer un événement" redirect="list">
        <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
            <TextInput
                source="title"
                label="Titre"
                validate={[required("Le titre est obligatoire"), minLength(3)]}
                fullWidth
            />
            <TextInput
                source="description"
                label="Description"
                multiline
                rows={4}
                fullWidth
            />
            <TextInput
                source="place"
                label="Lieu"
                validate={required("Le lieu est obligatoire")}
                fullWidth
            />
            <DateInput
                source="startDate"
                label="Date de début"
                validate={required("La date de début est obligatoire")}
            />
            <DateInput
                source="endDate"
                label="Date de fin"
                validate={required("La date de fin est obligatoire")}
            />
        </SimpleForm>
    </Create>
);
