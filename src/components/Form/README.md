# Form and FormGroup Components

The `Form` and `FormGroup` components are used to create and manage forms with various layouts and validation options. They support different sizes, loading states, and custom styling.

## Installation

To use the `Form` and `FormGroup` components, install the package:

```sh
npm install @saux/form
```

Then, import them into your project:

```jsx
import { Form, FormGroup } from '@saux/form';
```

## Usage

Here is an example of how to use the `Form` and `FormGroup` components:

```jsx
import React from 'react';
import Form from '@saux/form';
import FormGroup from '@saux/form/FormGroup';

const App = () => (
  <Form onSubmit={(e) => e.preventDefault()} layout="vertical" size="medium">
    <FormGroup label="Username" htmlFor="username" required>
      <input type="text" id="username" name="username" />
    </FormGroup>
    <FormGroup label="Password" htmlFor="password" required>
      <input type="password" id="password" name="password" />
    </FormGroup>
    <button type="submit">Submit</button>
  </Form>
);

export default App;
```

## Form Props

The `Form` component accepts the following props:

| Prop               | Type                                     | Default      | Description                                           |
| ------------------ | ---------------------------------------- | ------------ | ----------------------------------------------------- |
| `children`         | `React.ReactNode`                        | `undefined`  | The content of the form.                              |
| `layout`           | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` | The layout of the form.                               |
| `validationSchema` | `any`                                    | `undefined`  | The validation schema for the form (e.g., using Yup). |
| `onReset`          | `() => void`                             | `undefined`  | Callback triggered when the form is reset.            |
| `isLoading`        | `boolean`                                | `false`      | Whether the form is in a loading state.               |
| `size`             | `'small' \| 'medium' \| 'large'`         | `'medium'`   | The size of the form.                                 |
| `className`        | `string`                                 | `''`         | Custom class name for additional styling.             |

## FormGroup Props

The `FormGroup` component accepts the following props:

| Prop          | Type              | Default     | Description                                            |
| ------------- | ----------------- | ----------- | ------------------------------------------------------ |
| `label`       | `string`          | `undefined` | The label for the form group.                          |
| `children`    | `React.ReactNode` | `undefined` | The content of the form group.                         |
| `htmlFor`     | `string`          | `undefined` | The ID of the input element associated with the label. |
| `required`    | `boolean`         | `false`     | Whether the form group is required.                    |
| `description` | `string`          | `undefined` | The description text for the form group.               |
| `error`       | `string`          | `undefined` | The error message for the form group.                  |
| `inline`      | `boolean`         | `false`     | Whether the form group is displayed inline.            |

## Customization

The `Form` and `FormGroup` components can be customized using their respective props. You can control the layout, size, loading state, and validation of the form, as well as the label, description, and error message of each form group.

## Example

```jsx
import React from 'react';
import Form from '@saux/form';
import FormGroup from '@saux/form/FormGroup';

const App = () => (
  <Form
    onSubmit={(e) => e.preventDefault()}
    layout="horizontal"
    size="large"
    isLoading={false}
  >
    <FormGroup
      label="Email"
      htmlFor="email"
      required
      description="Please enter your email address."
    >
      <input type="email" id="email" name="email" />
    </FormGroup>
    <FormGroup
      label="Password"
      htmlFor="password"
      required
      error="Password is required."
    >
      <input type="password" id="password" name="password" />
    </FormGroup>
    <button type="submit">Submit</button>
  </Form>
);

export default App;
```

## License

These components are licensed under the [Proprietary License](../../LICENSE).
