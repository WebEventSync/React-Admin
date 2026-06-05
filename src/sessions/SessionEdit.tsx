"use client";

import {
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    ReferenceInput,
    SelectInput,
    required,
    useRecordContext,
    ReferenceArrayInput,
    AutocompleteArrayInput
} from "react-admin";

const SessionTitle = () => {
    const record = useRecordContext();
    return <span>Session : {record?.title}</span>;
};

export const SessionEdit = () => (
    <Edit title={<SessionTitle />} redirect="list">
        <SimpleForm>
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
    </Edit>
);
