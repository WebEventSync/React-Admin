"use client";

import {
    Create,
    SimpleForm,
    TextInput,
    DateTimeInput,
    ReferenceInput,
    SelectInput,
    required,
    AutocompleteArrayInput,
    ReferenceArrayInput,
} from "react-admin";

export const SessionCreate = () => (
    <Create title="Créer une session" redirect="list">
        <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
            <TextInput
                source="title"
                label="Titre"
                validate={required("Le titre est obligatoire")}
                fullWidth
            />
            <TextInput
                source="description"
                label="Description"
                multiline
                rows={3}
                fullWidth
            />
            <ReferenceInput source="eventId" reference="events" label="Événement">
                <SelectInput
                    optionText="title"
                    label="Événement"
                    validate={required("L'événement est obligatoire")}
                    fullWidth
                />
            </ReferenceInput>
            <ReferenceInput source="roomId" reference="rooms" label="Salle">
                <SelectInput
                    optionText="name"
                    label="Salle"
                    validate={required("La salle est obligatoire")}
                    fullWidth
                />
            </ReferenceInput>
            <ReferenceArrayInput
            source="speakerIds"
            reference="speakers"
            >
                 <AutocompleteArrayInput
                    optionText={(record) =>
                        `${record.firstName} ${record.lastName}`
                    }
                    validate={required("Au moins un intervenant est obligatoire")}
                />
            </ReferenceArrayInput>
            <DateTimeInput
                source="startTime"
                label="Heure de début"
                validate={required("L'heure de début est obligatoire")}
            />
            <DateTimeInput
                source="endTime"
                label="Heure de fin"
                validate={required("L'heure de fin est obligatoire")}
            />
        </SimpleForm>
    </Create>
);
