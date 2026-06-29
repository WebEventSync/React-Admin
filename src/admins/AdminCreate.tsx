import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  email,
} from "react-admin";

export const AdminCreate = () => (
  <Create>
    <SimpleForm sx={{
            maxWidth: 800,
            background: "#141d38",
            borderRadius: 4,
            p: 4,
        }}>
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
        label="Mot de passe"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);