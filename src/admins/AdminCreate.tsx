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
    <SimpleForm>
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