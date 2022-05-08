import { withTheme } from "@rjsf/core";
import { Theme as MaterialUITheme } from "@rjsf/material-ui";
const Form = withTheme(MaterialUITheme);

const JsonSchemaForm = () => {
  const schema = {
    title: "A registration form",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
      gender: {
        type: "string",
        title: "Gender",
        oneOf: [
          {
            title: "Male",
            const: "male",
          },
          {
            title: "Female",
            const: "female",
          },
          {
            title: "Other",
            const: "other",
          },
        ],
      },

      age: {
        type: "integer",
        title: "Age",
      },
      bio: {
        type: "string",
        title: "Bio",
      },
      areas: {
        type: "object",
        title: "Areas",
        properties: {
          "": {
            type: "array",
            items: {
              type: "string",
              enum: ["Developing", "QA", "Netwokring"],
            },
            uniqueItems: true,
          },
        },
      },
      date: {
        type: "string",
        format: "date",
      },
      telephone: {
        type: "integer",
        title: "Telephone",
        minLength: 10,
      },
      password: {
        type: "string",
        title: "Password",
      },
    },
  };

  const uiSchema = {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name",
    },
    lastName: {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name",
    },
    gender: {
      "ui:widget": "radio",
    },
    age: {
      "ui:widget": "updown",
    },
    bio: {
      "ui:widget": "textarea",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
      },
    },
    areas: {
      "": {
        "ui:widget": "checkboxes",
      },
    },
  };
  return (
    <div style={{ margin: "0 300px 0 300px" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={(event) => console.log("form", event)}
      />
    </div>
  );
};

export default JsonSchemaForm;
