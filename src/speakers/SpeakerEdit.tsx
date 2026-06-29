"use client";

import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    useRecordContext,
} from "react-admin";

const SpeakerTitle = () => {
    const record = useRecordContext();
    return <span>Intervenant : {record?.firstName} {record?.lastName}</span>;
};

export const SpeakerEdit = () => (
    <Edit title={<SpeakerTitle />} redirect="list">
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
    </Edit>
);
