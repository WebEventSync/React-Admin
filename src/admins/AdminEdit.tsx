import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  email,
} from "react-admin";

export const AdminEdit = () => (
  <Edit>
    <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
      <TextInput
        source="id"
        label="ID"
        disabled
      />
      <TextInput
        source="name"
        label="Nom"
        validate={[required()]}
      />
      <TextInput
        source="email"
        label="Email"
        validate={[required(), email()]}
      />
      <PasswordInput
        source="password"
        label="Nouveau mot de passe"
        helperText="Laisser vide pour ne pas modifier"
      />
    </SimpleForm>
  </Edit>
);